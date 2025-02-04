import { useState } from "react";
import "../ForgotPasswordPage/ForgotPassword.css";
import logo from "../../Images/Logo-Black.png";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending reset code to : ", email);
    }

    return (
        <>
        <div className="header">
            <img src={ logo } alt="logo" />
            <button>Login</button>
        </div>
        <div className="forgot-password">
            <div className="forgot-password__box">
                <h2 className="forgot-password__title">Forgot Password</h2>
                <p className="forgot-password__subtitle">
                    Don&apos;t worry, happens to all of us. Enter your email below to recover your password
                </p>
                <form onSubmit={handleSubmit} className="forgot-password__form">
                    <div className="forgot-password__input-container">
                        <i class="fa-regular fa-envelope forgot-password__icon"></i>
                        <input type="email" className="forgot-password__input" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <button type="submit" className="forgot-password__button">Send Code</button>
                </form>
                <div className="forgot-password__divider">or</div>
                <button className="forgot-password__button forgot-password__button--facebook">
                    <i class="fa-brands fa-facebook"></i>Continue with Facebook
                </button>
                <button className="forgot-password__button forgot-password__button--google">
                    <i className="fab fa-google"></i>Continue with Google
                </button>
            </div>
        </div>
        </>
    );
}

export default ForgotPassword;