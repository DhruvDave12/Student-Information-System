import React, { useEffect, useState } from "react";
import './login.styles.css';
import Form from "../../components/form/form.components";
import LogImg from "../../assets/images/login-base.svg";
import Button from "../../components/button/button.component";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickHandler = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/login", {
            email,
            password
        })
        if(res.data.data.userType === "student"){
            localStorage.setItem('id', res.data.data.userData.student_id);
            localStorage.setItem('type', res.data.data.userType);
            navigate(`/student/${res.data.data.userData.student_id}`);
            window.location.reload(false);
        }
        else if(res.data.data.userType === "faculty"){
            localStorage.setItem('id', res.data.data.userData.faculty_id);
            localStorage.setItem('type', res.data.data.userType);
            navigate(`/faculty/${res.data.data.userData.faculty_id}`);
            window.location.reload(false);
        }
    }

    return (
        <div className="login">
            <div className="login-wrap">
                <div className="form-wrap-login">
                    <p className="login-title">Login</p>
                    <Form label={"Email address"}
                        type={"text"}
                        name={"username"}
                        placeholder={"something@email.com"} 
                        setterFunction={setEmail}
                        />
                    <br />
                    <Form
                        label={"Password"}
                        type={"password"}
                        name={"password"}
                        setterFunction={setPassword}
                        placeholder={"your password"} />
                    <br />
                    <div className="log-check">
                        <input type="checkbox" className="log-box" />
                        <p className="remember">Remember Password</p>
                    </div>
                    <div className="btn-log-div">
                        <Button type="submit" onClickHandler={onClickHandler}>Login</Button>
                    </div>
                    <div className="not-account">
                        <p>Don't have an account? </p>
                        <Link to={'/signup'} className='link-sign' ><p>Sign up</p></Link>
                    </div>
                </div>
            </div>
            <div className="login-img">
                <img src={LogImg} alt="login" />
            </div>
        </div>
    )
}

export default Login;