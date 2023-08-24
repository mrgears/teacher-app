import React from 'react'
import './login.css';
import Wave from './Assets/wave.png'
import Img from './Assets/img.svg'
import Avatar from './Assets/avatar.svg'
import { Link } from 'react-router-dom';
function login() {
    return (
        <>
            <img className="wave" src={Wave} alt='' />
            <div className="container1">

                <div className="img">
                    <img src={Img} alt='' />
                </div>
                <div className="login-content">
                    <form action="/home">
                        <img src={Avatar} alt='' />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one focus">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">

                                <input type="text" placeholder="Username" name="username" className="input" />
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" placeholder="Password" name="password" className="input" />
                            </div>
                        </div>
                        <a className="forget" href="/">Forgot Password?</a>
                        <input type="submit" className="btn1 log" value="Login" />
                        {/* <button type="button" className="sign btn1" value="Sign Up">Sign Up</button>  */}
                        <Link to='/signup' className="btn1 sign">Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default login