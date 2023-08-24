import React from 'react'
import './signup.css';
import Wave from './Assets/wave.png'
import Img from './Assets/signupimg.svg'
import Avatar from './Assets/avatar.svg'
import { Link } from 'react-router-dom';
function signup() {
    return (
        <>
            <img className="wave" src={Wave} alt='' />
            <div className="container1">
                <div className="img">
                    <img src={Img} alt='' />
                </div>
                <div className="login-container1">
                    <form action="/home">
                        <img className="avatar" src={Avatar} alt='' />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one focus">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input name="username" className="input" type="text" />
                            </div>
                        </div>
                        <div className="input-div one focus">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Email ID</h5>
                                <input name="emailid" className="input" type="text" />
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input name="password" type="password" className="input" />
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Confirm Password</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a href="/">Forgot Password?</a>
                        <input type="submit" className="btn1" value="Register" />
                        <Link to='/' className="btn1 sign">Login</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signup