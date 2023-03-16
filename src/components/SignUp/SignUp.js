import { useState } from "react";
import { auth } from "../../firebase/index";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.scss";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };
  const SignUp = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/login");
        })
        .catch((err) => alert(err.message))

        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="outer-div ">
      <center>
        <form onSubmit={SignUp} className="SignUp_form">
          <h1 className="text-center py-1">SignUp</h1>
          {error && <div className="error ">{error}</div>}
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            autoComplete="on"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            type="password"
            value={password}
            required
            autoComplete="off"
            className="my-3"
            placeholder=" password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <input
            type="password"
            value={confirmPassword}
            required
            autoComplete="off"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />

          <button type="submit" className="btn my-3">
            SignUp
          </button>
          <p>
            Already have an account?
            <Link to="/login">login</Link>
          </p>
        </form>
       
      </center>
    </div>
  );
}

export default SignUp;
