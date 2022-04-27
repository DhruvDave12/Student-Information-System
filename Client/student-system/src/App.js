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
import AllStudents from './pages/all-students/all_student.component';
import ParticularAcademic from './pages/particular-academic/particular_academic.component';
import StudentProfile from './pages/student-profile/student_profile.component';
import FacultyProfile from './pages/faculty-data/faculty_profile.component';
import EditAcademics from './pages/edit-academics/edit_academics.component';
import EditStudentPage from './pages/edit-student/edit_student.component';
import CurricularDataForm from './pages/curricular-dataform/curricular-data-form.component';
import CourseDataForm from './pages/courses-dataform/courses-data-form.component';

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
        <Route path='/students/all' element={<AllStudents />}/>
        <Route path='/academics/:id' element={<ParticularAcademic />}/>
        <Route path='/student/:id' element = {<StudentProfile />}/>
        <Route path='/faculty/:id' element = {<FacultyProfile />}/>
        <Route path='/academics/edit' element={<EditAcademics />}/>
        <Route path='/student/edit' element={<EditStudentPage />}/>
        <Route path='/curricular-dataform' element={<CurricularDataForm />} />
        <Route path='/course-dataform' element={<CourseDataForm />} />
        <Route path='/info' element={<StudentData />} />
        <Route path='/student/:id' element={<StudentProfile />} />
        <Route path='/faculty/:id' element={<FacultyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
