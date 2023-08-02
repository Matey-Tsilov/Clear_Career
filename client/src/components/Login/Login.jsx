import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { login } from "../../services/userService";
import { UserContext } from "../../contexts/userContext";

import style from "./Login.module.css";

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [input, setInputs] = useState({
    email: { value: "", hasError: false, errorMsg: "" },
    password: { value: "", hasError: false, errorMsg: "" },
  });
  //#region EventHandlers
  const onInputChange = (e) => {
    const change = {
      [e.target.name]: {
        value: e.target.value,
        hasError: input[e.target.name].hasError,
        errorMsg: input[e.target.name].errorMsg,
      },
    };

    setInputs((before) => ({ ...before, ...change }));
  };
  const onInputBlur = (e) => {
    const inputCur = e.target;

    const change = {
      [e.target.name]: {
        value: e.target.value,
        hasError: false,
        errorMsg: "",
      }
    }

    if (inputCur.value.length < 10 && inputCur.name === "email") {
      change[inputCur.name].hasError = true
      change[inputCur.name].errorMsg = "Email needs to be at least 10 characters"
    }else if(inputCur.value.length < 3 && inputCur.name === "password"){
      change[inputCur.name].hasError = true
      change[inputCur.name].errorMsg = "This password is too easy. You need a better one"
    }
      setInputs((before) => ({ ...before, ...change }));
  };
  const onLoginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: input.email.value.trim(),
      password: input.password.value.trim(),
    };

    login(data).then((res) => {
      setUser(res);
      navigate("/");
    });
  };
//#endregion
  return (
    <section id="login">
      <div className={style.form}>
        <h2>Login</h2>
        <form onSubmit={onLoginSubmit} className={style["login-form"]}>
          <div>

            {input.email.hasError && (
              <label className={style.errorLabel} htmlFor="email">
                {input.email.errorMsg}
              </label>
            )}

            <input
              className={input.email.hasError && style.errorInput}
              type="text"
              name="email"
              id="email"
              placeholder="Type email here:"
              onChange={onInputChange}
              onBlur={onInputBlur}
              value={input.email.value}
            />
          </div>
          <div className={style.errorInputfield}>
            {input.password.hasError && (
              <label className={style.errorLabel} htmlFor="password">
                {input.password.errorMsg}
              </label>
            )}

            <input
              className={input.password.hasError && style.errorInput}
              type="password"
              name="password"
              id="password"
              placeholder="Type password here:"
              onChange={onInputChange}
              onBlur={onInputBlur}
              value={input.password.value}
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
