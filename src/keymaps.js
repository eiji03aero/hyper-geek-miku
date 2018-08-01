module.exports = keymaps => {
  const newKeymaps = {
    'miku:sidebar:toggle': 'ctrl+shift+command+o'
  };

  return Object.assign({}, keymaps, newKeymaps);
}
