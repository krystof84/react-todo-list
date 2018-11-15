import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TaskItem from './TaskItem/TaskItem';
import shortid from 'shortid';
import './App.scss';

class App extends Component {

  state = {
    taskList: [
      {
        id: shortid.generate(),
        name: 'Task 1 name',
        status: 'undone'
      },
      {
        id: shortid.generate(),
        name: 'Task 2 name',
        status: 'undone'
      },
      {
        id: shortid.generate(),
        name: 'Task 3 name',
        status: 'done'
      },
      {
        id: shortid.generate(),
        name: 'Task 4 name',
        status: 'done'
      }
    ],
    inputValue: '',
  };

  updateInputHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  addNewTaskHandler = () => {
    let newTaskList = [...this.state.taskList];
    newTaskList.push({
      id: shortid.generate(),
      name: this.state.inputValue,
      status: 'undone'
    });

    this.setState({
      taskList: newTaskList,
      inputValue: ''
    });
  }

  render() {

    let undoneTask = this.state.taskList.filter((task) => {
      return task.status === 'undone';
    });

    return (
      <div className="App">
        <div className="container">

          <AddTaskForm 
            newTask={this.addNewTaskHandler}
            updateInput={(event) => this.updateInputHandler(event)}
            inputVal={this.state.inputValue}/>

          <div className="row">
            <div className="col-12 col-md-6">

              <p>Todo task list:</p>
              <ul>
                {undoneTask.map((task) => {
                  return <TaskItem key={task.id} name={task.name}/>
                })}
              </ul>
              
            </div>
            <div className="col-12 col-md-6">

              <p>Done task list:</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
