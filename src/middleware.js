const C = require('./constants.js');
const messageSet = require('./messageSet.js');

module.exports = store => next => action => {
  if (action.type === 'SESSION_ADD_DATA') {
    if (messageSet.noFileDir.RE.test(action.data)) {
      store.dispatch({
        type: C.GM_CHANGE_AVATAR_STATE,
        payload: messageSet.noFileDir
      });
    }

    if (messageSet.noCommandFound.RE.test(action.data)) {
      store.dispatch({
        type: C.GM_CHANGE_AVATAR_STATE,
        payload: messageSet.noCommandFound
      });
    }

    if (messageSet.nothingToCommit.RE.test(action.data)) {
      store.dispatch({
        type: C.GM_CHANGE_AVATAR_STATE,
        payload: messageSet.nothingToCommit
      });
    }

    if (messageSet.commit.RE.test(action.data)) {
      store.dispatch({
        type: C.GM_CHANGE_AVATAR_STATE,
        payload: messageSet.commit
      });
    }

    if (messageSet.pushToRemote.RE.test(action.data)) {
      store.dispatch({
        type: C.GM_CHANGE_AVATAR_STATE,
        payload: messageSet.pushToRemote
      });
    }
    if (messageSet.pullFromRemote.RE.test(action.data)) {
      store.dispatch({
        type: C.GM_CHANGE_AVATAR_STATE,
        payload: messageSet.pullFromRemote
      });
    }
  }

  next(action);
}
