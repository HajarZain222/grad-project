import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ResetPasswordPage/ResetPassword.css";

function ResetPassword () {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleReset = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Please Try Again Passwords don't match!")
            return;
        }
        console.log("New Password Set : ", password);

        navigate("/login");
    }

    return(
        <>
        <div className="header">
            <img src="../assets/Logo ( Black ).png" alt="" />
            <button>Login</button>
        </div>
        <div className="container">
            <h2>Set a new password</h2>
            <p>Your previous password has been reseted. Please set a new password for your account.</p>
            <form onSubmit={handleReset} >
                <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <progress ></progress>
                <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Set Password</button>
            </form>
        </div>
        </>
    );
}

export default ResetPassword;