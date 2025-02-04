import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../VerifyCodePage/VerifyCode.css";
import logo from "../../Images/Logo-Black.png";


function VerifyCode () {
    const [code, setCode] = useState("");

    const handleVerify = (e) => {
        e.preventDefault();
        console.log("Verify code : ", code);
        
        Navigate("/reset-password");
    };

    return(
        <>
        <div className="header">
            <img src={logo} alt="logo" />
            <button>Login</button>
        </div>
        <div className="verify-code">
            <div className="verify-code__box">
                <h2 className="verify-code__title">Verify Code</h2>
                <p className="verify-code__subtitle">
                    An authentication code has been sent to your email.
                </p>
                <form onSubmit={handleVerify} className="verify-code__form">
                    <input className="verify-code__input" type="text" placeholder="Enter Code" value={code} onChange={(e) => setCode(e.target.value)} required />
                </form>
                <p className="verify-code__resend-text">Didn&apos;t receive a code?
                    <a href="/reset-password" className="verify-code__resend-link"> Re-send</a>
                </p>
                <button className="verify-code__button" type="submit">Submit</button>
            </div>
        </div>
        </>
    );
}

export default VerifyCode;