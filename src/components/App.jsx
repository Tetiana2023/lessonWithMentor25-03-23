import { Component } from 'react';
import { ListStudy } from './ListStudy/ListStudy';
// import { StudyForm } from './StudyForm/StudyForm';
import { nanoid } from 'nanoid';
import { TaskForm } from './TaskForm/TaskForm';

export class App extends Component {
  state = {
    todos: [],
  };

  // addTask = taskFromInput => {
  //   const todoshka = {
  //     task: taskFromInput,
  //     id: nanoid(),
  //   };
  //   const { todos } = this.state;
  //   const isTodoshkaExist = todos.find(
  //     todo => todo.task.toLowerCase() === taskFromInput.toLowerCase()
  //   );
    
  //   isTodoshkaExist
  //     ? alert(`${taskFromInput} is alredy exist`)
  //     : this.setState(prevState => {
  //         return { todos: [todoshka, ...prevState.todos] };
  //       });
  // };

 
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

  deletTask = taskId => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(todo => todo.id !== taskId),
      };
    });
  };

  render() {
    return (
      <>
        <TaskForm addTask={this.addTask} />
        {/* <StudyForm addTask={this.addTask} /> */}
        <ListStudy todos={this.state.todos} deletTask={this.deletTask} />
      </>
    );
  }
}
