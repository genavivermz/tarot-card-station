const randomInt = (max) => {
  if (max <= 0) return 0;
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  let value;
  do {
    crypto.getRandomValues(buf);
    value = buf[0];
  } while (value >= limit);
  return value % max;
};

const shuffle = (items) => {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
};

const cardById = Object.fromEntries(CARDS.map((card) => [card.id, card]));

const state = {
  remaining: [],
  laid: [],
  pinned: false,
  pinnedIndex: null,
  hideTimer: null,
};

const spreadEl = document.getElementById("spread");
const stationEl = document.querySelector(".station");
const deckColumn = document.querySelector(".deck-column");
const meaningRail = document.querySelector(".meaning-rail");
const meaningPlaceholder = document.querySelector(".meaning-placeholder");
const deckBtn = document.getElementById("deck-btn");
const reshuffleBtn = document.getElementById("reshuffle-btn");
const newReadingBtn = document.getElementById("new-reading-btn");
const overlay = document.getElementById("overlay");
const meaningPanel = document.getElementById("meaning-panel");
const meaningImage = document.getElementById("meaning-image");
const meaningKicker = document.getElementById("meaning-kicker");
const meaningTitle = document.getElementById("meaning-title");
const orientationBadge = document.getElementById("orientation-badge");
const meaningKeywords = document.getElementById("meaning-keywords");
const meaningBody = document.getElementById("meaning-body");
const meaningLove = document.getElementById("meaning-love");
const meaningPath = document.getElementById("meaning-path");
const meaningAdvice = document.getElementById("meaning-advice");
const meaningCopy = document.querySelector(".meaning-copy");
const closeMeaning = document.getElementById("close-meaning");

const freshDeckIds = () => shuffle(CARDS.map((card) => card.id));

const resetReading = () => {
  state.remaining = freshDeckIds();
  state.laid = [];
  closePanel();
  render();
};

const reshuffleRemaining = () => {
  if (state.remaining.length < 2) return;
  state.remaining = shuffle(state.remaining);
  deckBtn.classList.add("is-shuffling");
  window.setTimeout(() => deckBtn.classList.remove("is-shuffling"), 700);
};

const drawCard = () => {
  if (state.remaining.length === 0) return;
  const id = state.remaining.shift();
  const reversed = randomInt(2) === 1;
  state.laid.push({ id, reversed });
  render();
};

const cancelHide = () => {
  if (state.hideTimer) {
    window.clearTimeout(state.hideTimer);
    state.hideTimer = null;
  }
};

const scheduleHide = () => {
  if (state.pinned) return;
  cancelHide();
  state.hideTimer = window.setTimeout(() => {
    if (!state.pinned) closePanel();
  }, 180);
};

const openMeaning = (laid, pinned = false, index = null) => {
  if (state.pinned && !pinned) return;
  const card = cardById[laid.id];
  const face = laid.reversed ? "reversed" : "upright";
  const extra = (typeof DETAILS !== "undefined" && DETAILS[card.id]) || {
    love: { upright: "", reversed: "" },
    path: { upright: "", reversed: "" },
    advice: { upright: "", reversed: "" },
  };
  cancelHide();
  state.pinned = pinned;
  state.pinnedIndex = pinned ? index : null;
  meaningImage.src = card.image;
  meaningImage.alt = card.name;
  meaningImage.classList.toggle("is-reversed", laid.reversed);
  meaningKicker.textContent = `${card.arcana} · ${card.number}`.toLowerCase();
  meaningTitle.textContent = card.name;
  orientationBadge.textContent = face;
  orientationBadge.classList.toggle("is-reversed", laid.reversed);
  meaningKeywords.textContent = card.keywords[face];
  meaningBody.textContent = laid.reversed ? card.reversed : card.upright;
  meaningLove.textContent = extra.love[face];
  meaningPath.textContent = extra.path[face];
  meaningAdvice.textContent = extra.advice[face];
  overlay.hidden = false;
  if (meaningCopy) meaningCopy.scrollTop = 0;
  markPinnedCard();
};

const closePanel = () => {
  cancelHide();
  state.pinned = false;
  state.pinnedIndex = null;
  overlay.hidden = true;
  markPinnedCard();
};

const markPinnedCard = () => {
  spreadEl.querySelectorAll(".laid-card").forEach((node, index) => {
    node.classList.toggle("is-pinned", state.pinned && index === state.pinnedIndex);
  });
};

const render = () => {
  const remaining = state.remaining.length;
  deckBtn.disabled = remaining === 0;
  deckBtn.classList.toggle("is-empty", remaining === 0);
  reshuffleBtn.disabled = remaining < 2;

  spreadEl.querySelectorAll(".laid-card").forEach((node) => node.remove());
  spreadEl.classList.toggle("empty", state.laid.length === 0);
  stationEl.classList.toggle("is-fresh", state.laid.length === 0);

  if (state.laid.length === 0) {
    stationEl.append(deckColumn);
  } else {
    meaningRail.insertBefore(deckColumn, meaningPlaceholder);
  }

  state.laid.forEach((laid, index) => {
    const card = cardById[laid.id];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "laid-card";
    button.style.setProperty("--i", String(index));
    button.setAttribute(
      "aria-label",
      `${card.name}, ${laid.reversed ? "reversed" : "upright"}. open meaning.`
    );

    const frame = document.createElement("span");
    frame.className = "card-frame";
    if (laid.reversed) frame.classList.add("is-reversed");

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = "";
    img.draggable = false;
    frame.append(img);

    if (laid.reversed) {
      const badge = document.createElement("span");
      badge.className = "reversed-flag";
      badge.textContent = "reversed";
      frame.append(badge);
    }

    const caption = document.createElement("span");
    caption.className = "card-caption";
    caption.innerHTML = `<em>${index + 1}</em><strong>${card.name}</strong><small>${
      laid.reversed ? "reversed" : "upright"
    }</small>`;

    button.append(frame, caption);
    button.addEventListener("mouseenter", () => openMeaning(laid, false, index));
    button.addEventListener("click", () => openMeaning(laid, true, index));
    button.addEventListener("focus", () => openMeaning(laid, false, index));
    spreadEl.append(button);
  });
  markPinnedCard();
};

deckBtn.addEventListener("click", drawCard);
reshuffleBtn.addEventListener("click", reshuffleRemaining);
newReadingBtn.addEventListener("click", resetReading);
closeMeaning.addEventListener("click", closePanel);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) closePanel();
});

resetReading();
