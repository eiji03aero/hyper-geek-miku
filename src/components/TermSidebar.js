const { TopImageC } = require('./TopImage.js');
const { MenuButtonC, MenuButtonContainerC } = require('./MenuButton.js');
const { MikuAvatarC } = require('./MikuAvatar.js');
const { TodoListC } = require('./TodoList.js');
const { TimeC } = require('./Time.js');

exports.TermSidebarC = React => props => {
  const mapBox = array =>
    array.map((el,idx) =>
      React.createElement('div', { key: idx, className: 'geek-miku-box' }, el)
    );

  const TopImage = TopImageC(React);
  const MenuButton = MenuButtonC(React);
  const MenuButtonContainer = MenuButtonContainerC(React);
  const TodoList = TodoListC(React);
  const Time = TimeC(React);
  const MikuAvatar = MikuAvatarC(React);

  const menus = [
    React.createElement(MenuButton, {key:1}, 'Home'),
    React.createElement(MenuButton, {key:2}, 'Logs'),
    React.createElement(MenuButton, {key:3}, 'Config'),
    React.createElement(MenuButton, {key:4}, 'Contacts')
  ];

  const sidebarClassName = `geek-miku${props.show ? ' is_shown' : ''}`;

  return (
    React.createElement(
      'div',
      { className: sidebarClassName },
      mapBox([
        React.createElement(TopImage),
        React.createElement(MenuButtonContainer, null, menus),
        React.createElement(Time),
        React.createElement(MikuAvatar, { avatar: props.avatar })
      ])
    )
  );
}
