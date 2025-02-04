import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../VerifyCodePage/VerifyCode.css";

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
            <img src="../assets/Logo ( Black ).png" alt="" />
            <button>Login</button>
        </div>
        <div className="container">
            <h2>Verify Code</h2>
            <p>An authentication code has been sent to your email.</p>
            <form onSubmit={handleVerify}>
                <input className="" type="text" placeholder="Enter Code" value={code} onChange={(e) => setCode(e.target.value)} required />
            </form>
            <p>Didn&apos;t receive a code?
                <a href="/reset-password"> Re-send</a>
            </p>
            <button type="submit">Submit</button>
        </div>
        </>
    );
}

export default VerifyCode;