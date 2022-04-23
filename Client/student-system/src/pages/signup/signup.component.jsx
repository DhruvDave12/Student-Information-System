import React from 'react';
import './signup.styles.css';
import SignImg from '../../assets/images/signup-base.svg';
import Form from '../../components/form/form.components';
import Button from '../../components/button/button.component';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signup">
            <div className="sign-img">
                <img src={SignImg} alt="Sign" />
            </div>
            <div className="sign-wrap">
                <div className="form-wrap-sign">
                    <p className="signup-title">SignUp</p>
                    <div className="form-div">
                        <Form label={"Email Address"}
                            type={"text"}
                            name={"email"}
                            placeholder={"something@email.com"} />
                    </div>
                    <div className="form-div">
                        <Form label={"Password"}
                            type={"password"}
                            name={"pass"} />
                    </div>
                    <div className="form-div">
                        <Form label={"Confirm Password"}
                            type={"password"}
                            name={"confirm pass"} />
                    </div>
                    <div className="sign-check">
                        <div className="col-check">
                            <input type="radio" className="sign-radio" />
                            <p className="user-check">student</p>
                        </div>
                        <div className="col-check">
                            <input type="radio" className="sign-radio" />
                            <p className="user-check">faculty</p>
                        </div>
                    </div>
                    <div className="btn-div">
                        <Button type="submit">Sign Up</Button>
                    </div>
                    <div className="have-account">
                        <p>Already have an account? </p>
                        <Link to={'/login'} className='link-log' ><p>Login</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;