# Tailwind CSS Nudge Plugin
This plugin adds margin and padding utilities on a scale of 1-10 pixels for nudging/making small tweaks in pixels instead of adding to the spacing scale which uses REMs by default

## Setup
Install the plugin with either NPM or Yarn

```bash
# NPM
npm install joecampo/tailwindcss-nudge-plugin —save-dev

# Yarn
yarn add -D joecampo/tailwindcss-nudge-plugin
```

Then add it to the plugins array in your `tailwind.config.js` configuration:

```javascript
module.exports = {
  plugins: [
    require('joecampo/tailwindcss-nudge-plugin')
  ]
}
```

## Usage
The utilities this plugin adds simply prefix the existing margin & padding utilities with `nudge`. The numerical scale (1-10 by default) is in pixels rather than following the spacing scale.

Example: To nudge an element from the top by 3 pixels:

```html
<h1 class="text-2xl nudge-mt-3">Hello World!</h1>
```

### Extending the scale

If you'd like to extend or change the pixel scale, you can do so by adding a key for `nudging` in your `tailwind.config.js` file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      nudging: {
        '12': '12px',
      }
    }
  }
}
```
