const { mapTermsState, getTermGroupProps, getTermProps } = require('./src/mapper.js');
const { decorateTerms, mapTermsDispatch } = require('./src/terms.js');

exports.decorateConfig = require('./src/config.js');
exports.decorateTerm = require('./src/term.js');
exports.decorateTerms = decorateTerms;
exports.decorateKeymaps = require('./src/keymaps.js');
exports.mapTermsState = mapTermsState;
exports.mapTermsDispatch = mapTermsDispatch;
exports.getTermGroupProps = getTermGroupProps;
exports.getTermProps = getTermProps;
exports.middleware = require('./src/middleware.js');
exports.reduceUI = require('./src/reducer.js');

// TODO
// avatar show/hide animation
// time display
// iframe browser
// memo function
