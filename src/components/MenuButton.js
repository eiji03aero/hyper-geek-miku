exports.MenuButtonC = React => props =>
  React.createElement(
    'div',
    { className: 'menu-button', onClick: e => console.log('is clicked: ', e) },
    React.createElement(
      'span',
      null,
      props.children
    )
  );

exports.MenuButtonContainerC = React => props =>
  React.createElement(
    'div',
    { className: 'menu-button-container' },
    props.children
  );
