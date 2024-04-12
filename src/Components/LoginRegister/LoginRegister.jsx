import React, { useState } from 'react';
//included bootstrap using CDN links in index.html
import './LoginRegister.css'; // we can use css and bootstarp together


import user_icon from '../Assets/person.png';
import dob_icon from '../Assets/dob.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginRegister = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input form-group">
                        <img src={user_icon} alt="" />
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                )}
                {action === "Login" ? null : (
                    <div className="input form-group">
                        <img src={dob_icon} alt="" />
                        <input type="text" className="form-control" placeholder="Date of Birth" />
                    </div>
                )}
                <div className="input form-group">
                    <img src={email_icon} alt="" />
                    <input type="email" className="form-control" placeholder="EmailID" />
                </div>
                <div className="input form-group">
                    <img src={password_icon} alt="" />
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
            </div>
            {action === "Register" ? null : (
                <div className="forgot-password">Forgot Password..? <span>Click Here</span></div>
            )}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit btn btn-primary"} onClick={() => { setAction("Login") }}>Login</div>
                <div className={action === "Register" ? "submit gray" : "submit btn btn-primary"} onClick={() => { setAction("Register") }}>Register</div>
            </div>
        </div>
    )
}

export default LoginRegister;