# gridsome-plugin-matomo  

> Matomo plugin for Gridsome

See [VueMatomo](https://github.com/AmazingDreams/vue-matomo/blob/master/README.md) for possible options.

## Install
- `yarn add gridsome-plugin-matomo`
- `npm install gridsome-plugin-matomo`

## Usage

```js
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: YOUR_MATOMO_INSTANCE,
        siteId: YOUR_SITE_ID
      }
    }
  ]
}
```

