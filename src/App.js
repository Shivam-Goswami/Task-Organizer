import React,{useState, useEffect} from "react";
import Header from './Component/Header';
import Form from './Component/Form';
import TasksList from './Component/TasksList';
import './App.css';

const App = () => {

  const[input,setInput]=useState("");
  const[tasks,setTasks]=useState([]);

  const[time,setTime]=useState(0);
  const[timerOn,setTimerOn]=useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime+1)
      },1000)
    }
    else {
      clearInterval(interval);
      setTime(0);
    }
    return () => clearInterval(interval)

  },[timerOn]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          time={time}
          setTime={setTime}
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          />
        </div>
        <div>
          <TasksList tasks={tasks}
          setTasks={setTasks}
          time={time} 
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          />
        </div>
      </div>      
    </div>
  );
}

export default App;
