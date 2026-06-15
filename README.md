# Volume Slider

A small browser-based toy where you fight a losing battle against audio decay.

The volume starts at 100% and constantly drains. Clicking the button adds it back in small increments. The math is not in your favor.

## How it works

- Volume drains at 12.5 units per second
- Each click adds 5 units
- To hold steady, you need to click about 2.5 times per second

The bar changes color as volume drops: green, then orange, then red.

## Files

- `index.html` — page structure
- `style.css` — styling
- `script.js` — game logic

## Running it

Just open `index.html` in a browser. No dependencies, no build step.
