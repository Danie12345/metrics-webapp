import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Continents from './components/continents/Continents';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/continents" />} />
        <Route path="/continents" element={<Continents />} />
      </Routes>
    </div>
  );
}

export default App;
