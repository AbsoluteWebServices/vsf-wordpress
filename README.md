# VSF-Wordpress Integration

### Installation

---

Add your module to `````<Project>/packages`````

### Setup

---

Register the integration in the `middleware.config.js` file.

```javascript
module.exports = {
  integrations: {
    wordpress: {
      location: '@absolute-web/vsf-wordpress-api/server',
        configuration: {
        api: process.env.WORDPRESS_API_URL,
      },
    },
  },
};
```

Add `WORDPRESS_API_URL` variable to .env file
```
WORDPRESS_API_URL=<API_URL>
```

Register the module in the `nuxt.config.js` file.

```javascript
buildModules: {
  [
    '@vue-storefront/nuxt',
    {
      useRawSource: {
        dev: [
          '@absolute-web/vsf-wordpress-composables',
        ],
        prod: [
          '@absolute-web/vsf-wordpress-composables',
        ],
      },
    }
  ],
  ['@absolute-web/vsf-wordpress-composables/nuxt', {},],
},
```
