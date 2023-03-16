import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/index";
import { useNavigate } from "react-router-dom";
import "./login.scss";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        console.log(auth.currentUser);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="outer-div">
      
      <center>
        <form onSubmit={login} className="login_form">
          <h1>Log in</h1>
          {error && <div className="error">{error}</div>}
          <input
            type="email"
            value={email}
            required
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={password}
            required
            autoComplete="off"
            placeholder="Password"
            className="my-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button type="submit" className="btn">
            Login
          </button>
          <p>
            Don't have any account?
            <Link to="/signup">Create one here</Link>
          </p>
        </form>
      </center>
    </div>
  );
}

export default Login;
