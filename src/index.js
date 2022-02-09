import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { deleteTask, markTask, addTask } from './state'
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} deleteTask={deleteTask} markTask={markTask} addTask={addTask} /*markTask={markTask}*/ />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
