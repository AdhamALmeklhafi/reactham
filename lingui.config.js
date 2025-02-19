// eslint-disable-next-line no-undef
module.exports = {
  locales: ['en', 'ar'],
  sourceLocale: 'en',
  format: 'po',
  catalogs: [{
    path: 'app/locales/{locale}/messages',
    include: ['app'],
  }],
}