const C = require('./constants.js');
const { initialState } = require('./initialState.js');

exports.toggleSidebar = () => ({
  type: C.GM_TOGGLE_SIDEBAR
});

exports.initState = () => ({
  type: C.GM_INIT_STATE,
  payload: { initialState: initialState.geekMiku }
})
