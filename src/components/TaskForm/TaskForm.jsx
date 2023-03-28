import { Component } from 'react';


export class TaskForm extends Component {
  state = {
    task: '',
  };

  hendleInputChange =(e) => {
    const { name, value } = e.currentTarget;
    this.setState({
        [name]: value,
    })
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task)
    this.setState({task: ''});
  }

  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={this.hendleInputChange}
          ></input>
        <button type="submit">Add Task</button>
        </form>
      </>
    );
  }
}
