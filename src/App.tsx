import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Createnew from './pages/Createnew';
import Home from './pages/Home';
import Newtask from './components/Newtask';
import { TaskListProvider } from './context/Context';


function App() {
  return (
    <TaskListProvider>
    <Home/>
    </TaskListProvider>

  );
}

export default App;
