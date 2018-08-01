exports.TimeC = React =>
  class Time extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        time: new Date()
      }
    }

    componentDidMount () {
      setInterval(() => this.setTime(), 1000);
    }

    setTime () {
      this.setState({ time: new Date() })
    }

    render () {
      return React.createElement('p', null, this.state.time.toString());
    }
  }
