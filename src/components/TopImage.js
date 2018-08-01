const { getImagePath } = require('../path.js');

exports.TopImageC = React => props =>
  React.createElement(
    'img',
    { className: 'top-icon', src: getImagePath('Haskell-Logo') }
  );
