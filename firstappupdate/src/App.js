import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import tasks from'./sample/task.json';

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

class App extends Component {

  state={
    tasks: tasks
  }

  addTask = (title,description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = id => {
    const newTask = this.state.tasks.filter(task => { return task.id !== id });
    this.setState({ tasks: newTask });
  }

  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if(task.id === id) {
          task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTask });
  }

  render() {
    return (<div>
      <Router>
        <Link to='./'>Home</Link>
        <br/>
        <Link to='./posts'>Posts</Link>
        <br/>
        <Link to='./form'>Form</Link>
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/form' render={ () => {
            return <div>
              <TaskForm addTask={ this.addTask }/>
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
            </div>
          } }>
        </Route>
      </Router>
    </div>)
  }
}

export default App;
