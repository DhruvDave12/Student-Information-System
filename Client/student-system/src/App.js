import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.component';
import NavBar from './components/navbar/navbar.component';
import Login from './pages/login/login.component';
import SignUp from './pages/signup/signup.component';
import StudentDataForm from './pages/student-dataform/student-data-form.component';
import FacultyDataForm from './pages/faculty-dataform/faculty-data-form.component';
import AcademicsDataForm from './pages/academics-dataform/academics-data-form.component';
import InternshipDataForm from './pages/internship-dataform/internship-data-form.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/student-dataform' element={<StudentDataForm />} />
        <Route path='/faculty-dataform' element={<FacultyDataForm />} />
        <Route path='/academics-dataform' element={<AcademicsDataForm />} />
        <Route path='/internship-dataform' element={<InternshipDataForm />} />
      </Routes>
    </div>
  );
}

export default App;
