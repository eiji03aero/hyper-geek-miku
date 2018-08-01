exports.mapTermsState = (state, map) => {
  return Object.assign(map, {
    geekMiku: state.ui.geekMiku
  });
}


const passProps = (uid, parentProps, props) => {
  return Object.assign(props, {
    geekMiku: parentProps.geekMiku
  });
}
exports.getTermGroupProps = passProps;
exports.getTermProps = passProps;
