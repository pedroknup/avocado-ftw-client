module.exports = {
  globDirectory: './dist',
  globPatterns: ['**/*.{html,css,js,json}'],
  swDest: './dist/service-worker.js',
  runtimeCaching: [
    {
      method: 'GET',
      urlPattern: /\.(?:png|jpe?g|gif|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-assets',
        cacheableResponse: {
          statuses: [0, 200]
        },
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60 * 7
        }
      }
    }
  ],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
}
