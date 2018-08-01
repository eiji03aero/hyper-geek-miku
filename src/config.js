const { getCss } = require('./style.js');

const decorateConfig = config =>
  Object.assign({}, config, {
    css: getCss(config.css)
  });

module.exports = decorateConfig;
