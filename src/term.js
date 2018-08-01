const { TermSidebarC } = require('./components');

module.exports = (Terms, { React }) => {
  const TermSidebar = TermSidebarC(React);

  return class extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        isOpen: true
      };
    }

    render () {
      const { geekMiku } = this.props;

      return React.createElement(
        'div',
        {className: 'geek-miku-container'},
        React.createElement(Terms, this.props),
        React.createElement(TermSidebar, { show: geekMiku.show, avatar: geekMiku.avatar })
      );
    }
  }
}
