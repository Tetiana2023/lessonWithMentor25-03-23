import { Component } from 'react';

export class StudyForm extends Component {
  state = {
    task: '',
  };

  checkValueInput = e => {
    // console.log(e.target);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.resetForm();
// console.log(this.props)
  this.props.addTask(this.state.task)
    
  }

  resetForm =() => {
    this.setState({task:''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.checkValueInput}
        ></input>
        <button type="submit">AddTask</button>
      </form>
    );
  }
}
