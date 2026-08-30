#!/bin/bash
export PATH="/usr/bin:/bin:/usr/sbin:/sbin"
set -euo pipefail

OUT="/Users/amandaramirez/Documents/tarot card station/cards"
TMP="/tmp/tarot-ia"
mkdir -p "$OUT" "$TMP"

fetch() {
  local remote="$1"
  local dest="$2"
  local path="$OUT/$dest"
  if [[ -f "$path" && $(stat -f%z "$path") -gt 50000 ]]; then
    echo "skip $dest"
    return
  fi
  echo "fetching $remote -> $dest"
  curl -fsSL --retry 4 --retry-delay 2 -m 90 \
    -o "$TMP/${dest}.png" \
    "https://archive.org/download/rider-waite-tarot/${remote}"
  sips -s format jpeg -s formatOptions 92 "$TMP/${dest}.png" --out "$path" >/dev/null
  echo "  saved $(stat -f%z "$path") bytes"
  sleep 0.35
}

fetch minor_arcana_cups_ace.png cups-01-ace.jpg
fetch minor_arcana_cups_2.png cups-02.jpg
fetch minor_arcana_cups_3.png cups-03.jpg
fetch minor_arcana_cups_4.png cups-04.jpg
fetch minor_arcana_cups_5.png cups-05.jpg
fetch minor_arcana_cups_6.png cups-06.jpg
fetch minor_arcana_cups_7.png cups-07.jpg
fetch minor_arcana_cups_8.png cups-08.jpg
fetch minor_arcana_cups_9.png cups-09.jpg
fetch minor_arcana_cups_10.png cups-10.jpg
fetch minor_arcana_cups_page.png cups-11-page.jpg
fetch minor_arcana_cups_knight.png cups-12-knight.jpg
fetch minor_arcana_cups_queen.png cups-13-queen.jpg
fetch minor_arcana_cups_king.png cups-14-king.jpg
fetch minor_arcana_swords_ace.png swords-01-ace.jpg
fetch minor_arcana_swords_2.png swords-02.jpg
fetch minor_arcana_swords_3.png swords-03.jpg
fetch minor_arcana_swords_4.png swords-04.jpg
fetch minor_arcana_swords_5.png swords-05.jpg
fetch minor_arcana_swords_6.png swords-06.jpg
fetch minor_arcana_swords_7.png swords-07.jpg
fetch minor_arcana_swords_8.png swords-08.jpg
fetch minor_arcana_swords_9.png swords-09.jpg
fetch minor_arcana_swords_10.png swords-10.jpg
fetch minor_arcana_swords_page.png swords-11-page.jpg
fetch minor_arcana_swords_knight.png swords-12-knight.jpg
fetch minor_arcana_swords_queen.png swords-13-queen.jpg
fetch minor_arcana_swords_king.png swords-14-king.jpg
fetch minor_arcana_pentacles_ace.png pentacles-01-ace.jpg
fetch minor_arcana_pentacles_2.png pentacles-02.jpg
fetch minor_arcana_pentacles_3.png pentacles-03.jpg
fetch minor_arcana_pentacles_4.png pentacles-04.jpg
fetch minor_arcana_pentacles_5.png pentacles-05.jpg
fetch minor_arcana_pentacles_6.png pentacles-06.jpg
fetch minor_arcana_pentacles_7.png pentacles-07.jpg
fetch minor_arcana_pentacles_8.png pentacles-08.jpg
fetch minor_arcana_pentacles_9.png pentacles-09.jpg
fetch minor_arcana_pentacles_10.png pentacles-10.jpg
fetch minor_arcana_pentacles_page.png pentacles-11-page.jpg
fetch minor_arcana_pentacles_knight.png pentacles-12-knight.jpg
fetch minor_arcana_pentacles_queen.png pentacles-13-queen.jpg
fetch minor_arcana_pentacles_king.png pentacles-14-king.jpg

echo "COUNT $(ls -1 "$OUT"/*.jpg | wc -l | tr -d ' ')"
