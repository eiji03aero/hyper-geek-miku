// const { initialState } = require('./initialState.js');
const actions = require('./action.js');


exports.decorateTerms = (Terms, { React }) => {
  return class extends React.Component {
    constructor (props) {
      super(props);
      this.terms = null;
      this.onDecorated = this.onDecorated.bind(this);
      this.props.onInitState();
    }

    onDecorated(terms) {
      this.terms = terms;
      this.terms.registerCommands({
        'miku:sidebar:toggle': e => {
          this.props.onToggleSidebar();
        }
      });
    
      // Don't forget to propagate it to HOC chain
      if (this.props.onDecorated) this.props.onDecorated(terms);
    }

    render () {
      const termsProps = Object.assign({}, this.props, {
        onDecorated: this.onDecorated
      });
      return React.createElement(Terms, termsProps, null);
    }
  }
}

exports.mapTermsDispatch = (dispatch, map) => {
  return Object.assign({}, map, {
    onToggleSidebar: () => dispatch(actions.toggleSidebar()),
    onInitState: () => dispatch(actions.initState())
  });
}
