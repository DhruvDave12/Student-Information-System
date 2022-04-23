import React from "react";
import './login.styles.css';
import Form from "../../components/form/form.components";
import LogImg from "../../assets/images/login-base.svg";
import Button from "../../components/button/button.component";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="login-wrap">
                <div className="form-wrap-login">
                    <p className="login-title">Login</p>
                    <Form label={"Email address"}
                        type={"text"}
                        name={"username"}
                        placeholder={"something@email.com"} />
                    <br />
                    <Form
                        label={"Password"}
                        type={"password"}
                        name={"password"}
                        placeholder={"your password"} />
                    <br />
                    <div className="log-check">
                        <input type="checkbox" className="log-box" />
                        <p className="remember">Remember Password</p>
                    </div>
                    <div className="btn-log-div">
                        <Button type="submit">Login</Button>
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