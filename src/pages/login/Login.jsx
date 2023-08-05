import React from 'react';
import "./login.css";

const Login = () => {
    return (
        <div>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">AdrainMedia</h3>
                        <span className="loginDesc">Connect with friends and the word around you on AdrainMedia</span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder='Email' className="loginInput" />
                            <input placeholder='Password' className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="forgotPassword">Forgot Password?</span>
                            <button className="newUser">Create a New Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
