import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPasswordPage/ForgotPassword"
import VerifyCode from "./pages/VerifyCodePage/VerifyCode";
import ResetPassword from "./pages/ResetPasswordPage/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;