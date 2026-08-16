# Build Your Bowl — CSS Art, Comfort Food Edition

[![Preview](https://larrymargerum-devto-frontend-bowl.pages.dev)](https://larrymargerum-devto-frontend-bowl.pages.dev/)

A pure CSS art project that visualizes a bowl of **arroz caldo** (Filipino chicken rice soup) with interactive toppings. Every visual element — from the broth's simmering glow to the steam rising from the bowl — is crafted with CSS. JavaScript plays only a supporting role, toggling class names to reveal ingredients.

---

## 🎨 Features

- **Pure CSS Art** — All visual effects (gradients, shadows, transforms) are pure CSS
- **Container Query Responsive** — Scales beautifully from mobile to large displays
- **Interactive Toppings** — Add garlic, scallion, egg, calamansi, and chili oil
- **Hover Previews** — See ghosted previews of toppings before clicking
- **Stir Animation** — Click the bowl or "Stir the pot" button for a swirling animation
- **Completion Celebration** — A golden ring pulse appears when all toppings are added
- **Accessibility** — Full keyboard navigation and ARIA attributes

---

## 🍲 The Bowl

This visualization represents **arroz caldo**, a beloved Filipino comfort food. The base consists of:

- **Rice grains** — Golden flakes floating in the broth
- **Shredded chicken** — The protein foundation
- **Broth** — A rich, simmering base with ambient highlights

### Optional Toppings

| Topping | Description |
|---------|-------------|
| 🧄 Fried Garlic | Golden, crispy bits on top |
| 🥬 Scallion | Fresh green rings |
| 🥚 Boiled Egg | Soft-boiled half |
| 🍋 Calamansi | Bright citrus wedge |
| 🌶️ Chili Oil | Spicy red slivers |

---

## 🚀 Live Demo

View the live demo: https://larrymargerum-devto-frontend-bowl.pages.dev

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Container Queries, Gradients, Transforms) |
| Animation | CSS Transitions, Keyframes, Cubic-Bezier easing |
| Interactivity | Vanilla JavaScript (class toggling only) |
| Fonts | JetBrains Mono, Fraunces (Google Fonts) |

---

## 📁 Project Structure

```
build-your-bowl/
├── index.html          # Main HTML document
├── LICENSE             # MIT License
├── README.md           # This file
├── css/
│   ├── variables.css   # CSS custom properties and base styles
│   ├── layout.css      # Layout, responsive breakpoints, typography
│   ├── bowl.css        # Main CSS art: bowl, broth, garnishes, animations
│   └── controls.css    # Buttons, chips, status line, footnote
└── js/
    └── script.js       # Minimal JS: toggle classes, stir animation, surprise mode
```

---

## 🧪 How It Works

### The CSS Art Technique

This project uses several advanced CSS techniques:

1. **Box-shadow particles** — Hundreds of box-shadows create rice grains, pepper flecks, and garnish details
2. **Radial & conic gradients** — For the broth, egg yolk, and calamansi wedge
3. **Transform origin** — Precise positioning of all elements in the composition
4. **Container queries** — `100cqw` units for responsive canvas scaling
5. **`:has()` selector** — Hover previews reach across the page without JavaScript

### JavaScript Role

The JavaScript (`js/script.js`) is intentionally minimal:

- Toggles `.show-*` classes on the composition to reveal toppings
- Handles the stir animation (adds/removes `.stirring` class)
- Updates the status line with messages based on topping count
- Provides a "Surprise me" random topping generator

---

## 🎯 Development

### Prerequisites

- Modern browser (Chrome 105+, Firefox 110+, Safari 15.4+)
- No build tools required — pure HTML/CSS/JS

### Running Locally

```bash
# Clone the repository
git clone https://github.com/larrymargerum01/devto-frontend-challenge-bowl.git
cd build-your-bowl

# Open in your browser
open index.html
# or serve with any static server
npx serve .
```

### Browser Support

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ⚠️ Requires CSS container queries (no IE support)

---

## 📜 License

MIT License — see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by Filipino **arroz caldo** — a comforting bowl of chicken rice soup
- Built as a frontend challenge showcasing pure CSS artistry
- Hosted via GitHub Pages

---

## 📝 Notes

- The only JavaScript in this piece toggles class names and this sentence.
- Hover previews use the `:has()` pseudo-class to reach across the DOM
- Reduced motion preference is respected with `@media (prefers-reduced-motion: reduce)`
