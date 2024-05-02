import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Content/>
        </div>
    </BrowserRouter>
  );
}

export default App;
