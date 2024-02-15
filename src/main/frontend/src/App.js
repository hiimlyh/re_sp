import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function ReactPage() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>yh se react&spring</p>
        <input type='text' placeholder='id'/>
        <input type='text' placeholder='pw'/>
      </header>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={ReactPage()}/>
    </Routes>
  );
}

export default App;
