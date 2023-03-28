import { Component } from 'react';
import { ListStudy } from './ListStudy/ListStudy';
import { StudyForm } from './StudyForm/StudyForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    todos: [],
  };

  addTask = task => {
    // console.log(task)
    const todo = {
      task: task,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { todos: [todo, ...prevState.todos] };
    });
  };

  deletTask = (taskId) => {
    this.setState(({todos}) => { 
      return {
      todos: todos.filter(todo => todo.id !== taskId)}
    })
  }

  render() {
    return (
      <>
        <StudyForm addTask={this.addTask} />
        <ListStudy todos={this.state.todos} deletTask={this.deletTask} />
      </>
    );
  }
}
