import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="header">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control"/>
                  <button type="submit" className="btn btn-primary">Add task</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">

              Todo tasks list
              
            </div>
            <div className="col-12 col-md-6">
              Done tasks list
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
