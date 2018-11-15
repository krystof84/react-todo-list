import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TaskItem from './TaskItem/TaskItem';
import './App.scss';

class App extends Component {

  state = {
    taskList: [
      {
        id: 1,
        name: 'Task 1 name',
        status: 'undone'
      },
      {
        id: 2,
        name: 'Task 2 name',
        status: 'undone'
      },
      {
        id: 3,
        name: 'Task 3 name',
        status: 'done'
      },
      {
        id: 4,
        name: 'Task 4 name',
        status: 'done'
      }
    ]
  };

  render() {

    let undoneTask = this.state.taskList.filter((task) => {
      return task.status === 'undone';
    });

    return (
      <div className="App">
        <div className="container">

          <AddTaskForm />

          <div className="row">
            <div className="col-12 col-md-6">

              <p>Todo tasks list:</p>
              <ul>
                {undoneTask.map((task) => {
                  return <TaskItem key={task.id} name={task.name}/>
                })}
              </ul>
              
            </div>
            <div className="col-12 col-md-6">

              <p>Done tasks list:</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
