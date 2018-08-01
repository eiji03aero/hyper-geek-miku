exports.TodoListC = React =>
  class TodoList extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        todos: [
          {
            title: 'finish task 1',
            done: false
          }
        ]
      };
    }

    render () {
      const { todos } = this.state;

      if (!this.state.todos) return React.createElement('p',null, 'not much here');

      return React.createElement('div', null,
        React.createElement('ul', null,
          todos.map((d,i) => (
            React.createElement('li', {key: i},
              React.createElement('label', null,
                React.createElement('input', {type: 'checkbox', value: d.done}),
                React.createElement('span', null, d.title)
              )
            )
          ))
        )
      );
    }
  }
