import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.component';
import NavBar from './components/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
