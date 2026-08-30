#!/usr/bin/env python3
"""Download remaining original RWS scans via curl (system certs) with retries."""

from __future__ import annotations

import json
import subprocess
import time
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT_DIR = ROOT / "cards"
UA = (
    "TarotReadingStation/1.0 "
    "(educational personal project; public-domain Rider-Waite-Smith scans "
    "from Wikimedia Commons)"
)

FILES: list[tuple[str, str]] = [
    ("RWS Tarot 00 Fool.jpg", "00-the-fool.jpg"),
    ("RWS Tarot 01 Magician.jpg", "01-the-magician.jpg"),
    ("RWS Tarot 02 High Priestess.jpg", "02-the-high-priestess.jpg"),
    ("RWS Tarot 03 Empress.jpg", "03-the-empress.jpg"),
    ("RWS Tarot 04 Emperor.jpg", "04-the-emperor.jpg"),
    ("RWS Tarot 05 Hierophant.jpg", "05-the-hierophant.jpg"),
    ("RWS Tarot 06 Lovers.jpg", "06-the-lovers.jpg"),
    ("RWS Tarot 07 Chariot.jpg", "07-the-chariot.jpg"),
    ("RWS Tarot 08 Strength.jpg", "08-strength.jpg"),
    ("RWS Tarot 09 Hermit.jpg", "09-the-hermit.jpg"),
    ("RWS Tarot 10 Wheel of Fortune.jpg", "10-wheel-of-fortune.jpg"),
    ("RWS Tarot 11 Justice.jpg", "11-justice.jpg"),
    ("RWS Tarot 12 Hanged Man.jpg", "12-the-hanged-man.jpg"),
    ("RWS Tarot 13 Death.jpg", "13-death.jpg"),
    ("RWS Tarot 14 Temperance.jpg", "14-temperance.jpg"),
    ("RWS Tarot 15 Devil.jpg", "15-the-devil.jpg"),
    ("RWS Tarot 16 Tower.jpg", "16-the-tower.jpg"),
    ("RWS Tarot 17 Star.jpg", "17-the-star.jpg"),
    ("RWS Tarot 18 Moon.jpg", "18-the-moon.jpg"),
    ("RWS Tarot 19 Sun.jpg", "19-the-sun.jpg"),
    ("RWS Tarot 20 Judgement.jpg", "20-judgement.jpg"),
    ("RWS Tarot 21 World.jpg", "21-the-world.jpg"),
    ("Wands01.jpg", "wands-01-ace.jpg"),
    ("Wands02.jpg", "wands-02.jpg"),
    ("Wands03.jpg", "wands-03.jpg"),
    ("Wands04.jpg", "wands-04.jpg"),
    ("Wands05.jpg", "wands-05.jpg"),
    ("Wands06.jpg", "wands-06.jpg"),
    ("Wands07.jpg", "wands-07.jpg"),
    ("Wands08.jpg", "wands-08.jpg"),
    ("Wands09.jpg", "wands-09.jpg"),
    ("Wands10.jpg", "wands-10.jpg"),
    ("Wands11.jpg", "wands-11-page.jpg"),
    ("Wands12.jpg", "wands-12-knight.jpg"),
    ("Wands13.jpg", "wands-13-queen.jpg"),
    ("Wands14.jpg", "wands-14-king.jpg"),
    ("Cups01.jpg", "cups-01-ace.jpg"),
    ("Cups02.jpg", "cups-02.jpg"),
    ("Cups03.jpg", "cups-03.jpg"),
    ("Cups04.jpg", "cups-04.jpg"),
    ("Cups05.jpg", "cups-05.jpg"),
    ("Cups06.jpg", "cups-06.jpg"),
    ("Cups07.jpg", "cups-07.jpg"),
    ("Cups08.jpg", "cups-08.jpg"),
    ("Cups09.jpg", "cups-09.jpg"),
    ("Cups10.jpg", "cups-10.jpg"),
    ("Cups11.jpg", "cups-11-page.jpg"),
    ("Cups12.jpg", "cups-12-knight.jpg"),
    ("Cups13.jpg", "cups-13-queen.jpg"),
    ("Cups14.jpg", "cups-14-king.jpg"),
    ("Swords01.jpg", "swords-01-ace.jpg"),
    ("Swords02.jpg", "swords-02.jpg"),
    ("Swords03.jpg", "swords-03.jpg"),
    ("Swords04.jpg", "swords-04.jpg"),
    ("Swords05.jpg", "swords-05.jpg"),
    ("Swords06.jpg", "swords-06.jpg"),
    ("Swords07.jpg", "swords-07.jpg"),
    ("Swords08.jpg", "swords-08.jpg"),
    ("Swords09.jpg", "swords-09.jpg"),
    ("Swords10.jpg", "swords-10.jpg"),
    ("Swords11.jpg", "swords-11-page.jpg"),
    ("Swords12.jpg", "swords-12-knight.jpg"),
    ("Swords13.jpg", "swords-13-queen.jpg"),
    ("Swords14.jpg", "swords-14-king.jpg"),
    ("Pents01.jpg", "pentacles-01-ace.jpg"),
    ("Pents02.jpg", "pentacles-02.jpg"),
    ("Pents03.jpg", "pentacles-03.jpg"),
    ("Pents04.jpg", "pentacles-04.jpg"),
    ("Pents05.jpg", "pentacles-05.jpg"),
    ("Pents06.jpg", "pentacles-06.jpg"),
    ("Pents07.jpg", "pentacles-07.jpg"),
    ("Pents08.jpg", "pentacles-08.jpg"),
    ("Pents09.jpg", "pentacles-09.jpg"),
    ("Pents10.jpg", "pentacles-10.jpg"),
    ("Pents11.jpg", "pentacles-11-page.jpg"),
    ("Pents12.jpg", "pentacles-12-knight.jpg"),
    ("Pents13.jpg", "pentacles-13-queen.jpg"),
    ("Pents14.jpg", "pentacles-14-king.jpg"),
]


def curl(args: list[str]) -> subprocess.CompletedProcess[bytes]:
    return subprocess.run(
        ["curl", "-sS", "-A", UA, *args],
        check=False,
        capture_output=True,
    )


def original_urls(titles: list[str]) -> dict[str, dict]:
    mapping: dict[str, dict] = {}
    for i in range(0, len(titles), 40):
        chunk = titles[i : i + 40]
        params = {
            "action": "query",
            "format": "json",
            "prop": "imageinfo",
            "iiprop": "url|size|width|height",
            "titles": "|".join(f"File:{title}" for title in chunk),
        }
        url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
        result = curl(["--retry", "5", "--retry-delay", "4", url])
        if result.returncode != 0:
            raise SystemExit(result.stderr.decode() or "API request failed")
        data = json.loads(result.stdout.decode("utf-8"))
        for page in data["query"]["pages"].values():
            title = page["title"].removeprefix("File:")
            info = page["imageinfo"][0]
            mapping[title] = info
        time.sleep(1)
    return mapping


def download(url: str, dest: Path) -> None:
    for attempt in range(8):
        result = curl(
            [
                "-L",
                "--fail",
                "--retry",
                "4",
                "--retry-delay",
                "6",
                "-o",
                str(dest),
                url,
            ]
        )
        if result.returncode == 0 and dest.exists() and dest.stat().st_size > 50_000:
            return
        wait = 8 * (attempt + 1)
        print(f"  retry in {wait}s ({dest.name})")
        time.sleep(wait)
    raise SystemExit(f"Failed to download {dest.name} from {url}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    needed = [(title, local) for title, local in FILES if not (OUT_DIR / local).exists() or (OUT_DIR / local).stat().st_size < 50_000]
    print(f"{len(FILES) - len(needed)} already present, {len(needed)} to fetch")
    if not needed:
        print("Nothing to do.")
        return
    info = original_urls([title for title, _ in needed])
    for index, (title, local) in enumerate(needed, start=1):
        meta = info[title]
        dest = OUT_DIR / local
        print(
            f"[{index}/{len(needed)}] {title} "
            f"{meta['width']}x{meta['height']} original -> {local}"
        )
        download(meta["url"], dest)
        print(f"  saved {dest.stat().st_size} bytes")
        time.sleep(1.2)
    count = len(list(OUT_DIR.glob("*.jpg")))
    print(f"Done. {count} cards in {OUT_DIR}")
    if count != 78:
        raise SystemExit(f"Expected 78 files, found {count}")


if __name__ == "__main__":
    main()
