const { getImagePath } = require('../path.js');

exports.MikuAvatarC = React => props => {
  console.log('in ava: ', props);

  return React.createElement(
    'div',
    null,
    props.avatar.message,
    React.createElement(
      'img',
      { src: getImagePath(props.avatar.image) }
    )
  );
}
