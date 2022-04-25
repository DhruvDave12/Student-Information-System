import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.component';
import NavBar from './components/navbar/navbar.component';
import Login from './pages/login/login.component';
import SignUp from './pages/signup/signup.component';
import StudentData from './pages/student-data/student-data.component';
import StudentProfile from './pages/student-profile/student_profile.component';

function App() {
  localStorage.setItem('LoginStatus', false);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/info' element={<StudentData />}/>
        <Route path='/student/:id' element = {<StudentProfile />}/>
      </Routes>
    </div>
  );
}

export default App;
