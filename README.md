# Volume Slider

A badly constructed UI component that is painly wrong and excrutiating for the user.

The volume starts at 100% and constantly drains. Clicking the button adds it back in small increments.

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

Just open `index.html` in a browser.
