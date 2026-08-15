const composition = document.getElementById('composition');
const garnishLayer = document.getElementById('garnishLayer');
const art = document.querySelector('.art');
const chips = document.querySelectorAll('.chip-toggle');
const targets = ['garlic', 'scallion', 'egg', 'calamansi', 'chili'];
const statusLine = document.getElementById('statusLine');
const active = new Set();
let stirTimer = null;

const messages = {
  0: "Plain and simple — sometimes that's exactly right.",
  1: "Getting there.",
  2: "Now we're talking.",
  3: "This is a real bowl now.",
  4: "Almost the whole spread.",
  5: "The whole spread. My mother would approve."
};

function updateStatus() {
  if (active.has('chili') && active.has('calamansi') && active.size === 2) {
    statusLine.textContent = "Bright and sharp — my favorite combo.";
    return;
  }
  statusLine.textContent = messages[active.size];
}

function setTopping(target, on) {
  composition.classList.toggle('show-' + target, on);
  if (on) active.add(target); else active.delete(target);
  const chip = document.querySelector('.chip-toggle[data-target="' + target + '"]');
  if (chip) chip.setAttribute('aria-pressed', on ? 'true' : 'false');
  updateStatus();

  if (active.size === targets.length) {
    composition.classList.remove('complete');
    void composition.offsetWidth; // restart the ring pulse if it plays again
    composition.classList.add('complete');
  } else {
    composition.classList.remove('complete');
  }
}

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    const target = chip.dataset.target;
    const isOn = chip.getAttribute('aria-pressed') === 'true';
    setTopping(target, !isOn);
  });
});

function stir() {
  garnishLayer.classList.remove('stirring');
  art.classList.remove('stirred');
  void garnishLayer.offsetWidth; // restart animation
  garnishLayer.classList.add('stirring');
  art.classList.add('stirred');
  clearTimeout(stirTimer);
  stirTimer = setTimeout(() => {
    garnishLayer.classList.remove('stirring');
    art.classList.remove('stirred');
  }, 1500);
}

document.getElementById('stirHit').addEventListener('click', stir);
document.getElementById('stirBtn').addEventListener('click', stir);

document.getElementById('surpriseBtn').addEventListener('click', () => {
  targets.forEach(t => setTopping(t, Math.random() > 0.4));
  stir();
});
