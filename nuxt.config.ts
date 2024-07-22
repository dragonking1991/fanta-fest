export default defineNuxtConfig({
  "modules": ["@nuxt/image", "@pinia/nuxt",'nuxt-svgo'],
  "ssr": false,

  "devServer": {
    "https": true,
    "port": 3000,
    "host": "0.0.0.0",
  },

  "postcss": {
    "plugins": {
      "tailwindcss": {},
      "autoprefixer": {},
    },
  },

  "svgo": {
    autoImportPath: "./assets/icons/svg",
    componentPrefix: "icon",
  },

  "css": ["~/assets/css/main.scss"],
  "components": ["~/components"],

  "pinia": {
    "storesDirs": ['./stores/**', './custom-folder/stores/**'],
  },

  "app": {
    "baseURL": "/onexp-fanta-fest",
    "head": {
      "link": [
        {
          "rel": "icon",
          "type": "image/ico",
          "href": "./favicon.ico",
        },
      ],
      "script": [],
    },
  },

  compatibilityDate: "2024-07-03",
});