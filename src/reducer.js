const C = require('./constants.js');

module.exports = (state, action) => {
  const getNewState = obj => Object.assign({}, state.geekMiku, obj);

  switch (action.type) {
    case C.GM_INIT_STATE:
      const { payload: { initialState }} = action;
      return state.set('geekMiku', initialState);

    case C.GM_CHANGE_AVATAR_STATE:
      const { payload: { message, image} } = action;
      return state.set('geekMiku', getNewState({ avatar: { message, image }}));

    case C.GM_TOGGLE_SIDEBAR:
      return state.set('geekMiku', getNewState({ show: !state.geekMiku.show }));

    default:
      return state;
  }
}
