import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App(props) {

  console.log(props.state)
  return (
    <div className="App">
      <Header />
      <Main task={props.state.tasks} markTask={props.markTask} deleteTask={props.deleteTask} addTask={props.addTask} />
    </div>
  );
}


export default App;
