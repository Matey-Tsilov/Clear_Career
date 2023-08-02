import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { login } from "../../services/userService";
import { UserContext } from "../../contexts/userContext";

import style from "./Login.module.css";

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [input, setInputs] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    setInputs((before) => ({ ...before, ...change }));
  };
  const onLoginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: input.email.trim(),
      password: input.password.trim(),
    };

    login(data).then((res) => {
      setUser(res);
      navigate("/");
    });
  };

  return (
    <section id="login">
      <div className={style.form}>
        <h2>Login</h2>
        <form onSubmit={onLoginSubmit} className={style["login-form"]}>
          <div className={style.inputField}>
            <label className={style.error} htmlFor="email">
              Email is already taken!
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Type email here:"
              onChange={onInputChange}
              value={input.email}
            />
          </div>
          <div className={style.inputField}>
            <label className={style.error} htmlFor="password">
              {}
            </label>
            <input
              //className={errors.password && style.errorMsg}
              type="password"
              name="password"
              id="password"
              placeholder="Type password here:"
              onChange={onInputChange}
              value={input.password}
            />
          </div>
          <button type="submit">login</button>
          <p className={style.message}>
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
