import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ResetPasswordPage/ResetPassword.css";
import logo from "../../Images/Logo-Black.png";


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
            <img src={ logo } alt="" />
            <button>Login</button>
        </div>
        <div className="reset-password">
            <div className="reset-password__box">
                <h2 className="reset-password__title">Set a new password</h2>
                <p className="reset-password__subtitle">
                    Your previous password has been reseted. Please set a new password for your account.
                </p>
                <form onSubmit={handleReset} className="reset-password__form">
                    <div className="reset-password__input-container">
                        <i class="fa-solid fa-lock reset-password__icon"></i>
                        <input type="password" className="reset-password__input" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <progress ></progress>
                    <div className="reset-password__input-container">
                        <i class="fa-solid fa-lock reset-password__icon"></i>
                        <input type="password" className="reset-password__input" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <button className="reset-password__button" type="submit">Set Password</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default ResetPassword;