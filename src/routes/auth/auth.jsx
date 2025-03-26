import { useState } from "react";
import Image from "../../components/image/image";
import "./auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="auth">
      <div className="authContainer">
        <Image
          path="/pinterest/general/logo.png"
          alt="logo"
          width={36}
          height={36}
        />
        <h1>{isRegister ? "Create an account" : "Login to your account"}</h1>
        {!isRegister ? (
          <form key="loginForm" action="">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(!isRegister)}>
              Don&apos;t have an account? <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="registerForm" action="">
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Display Name</label>
              <input
                type="text"
                name="displayName"
                id="displayName"
                placeholder="Display Name"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(!isRegister)}>
              Already have an account? <b>Login</b>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
