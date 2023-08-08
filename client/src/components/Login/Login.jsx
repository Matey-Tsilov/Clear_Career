import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import { login } from "../../services/userService";
import { UserContext } from "../../contexts/userContext";

import style from "./Login.module.css";

export const Login = ({close, open}) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: { value: "", hasError: false, errorMsg: "" },
    password: { value: "", hasError: false, errorMsg: "" },
  });
  //#region EventHandlers
  const onInputChange = (e) => {
    const change = {
      [e.target.name]: {
        value: e.target.value,
        hasError: inputs[e.target.name].hasError,
        errorMsg: inputs[e.target.name].errorMsg,
      }
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
      },
    };

    if (inputCur.value.length < 10 && inputCur.name === "email") {
      change[inputCur.name].hasError = true;
      change[inputCur.name].errorMsg =
        "Email needs to be at least 10 characters";
    } else if (inputCur.value.length <= 3 && inputCur.name === "password") {
      change[inputCur.name].hasError = true;
      change[inputCur.name].errorMsg =
        "This password is too easy. You need a better one";
    }
    setInputs((before) => ({ ...before, ...change }));
  };
  const onLoginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: inputs.email.value.trim(),
      password: inputs.password.value.trim(),
    };

    login(data).then((res) => {
      setUser(res);
      navigate("/dashboard");
    });
  };
  //#endregion

  return (
      <div className={style.form}>
        <FontAwesomeIcon onClick={close} size="xl" className={style.icon} icon={faCircleXmark} />
        <h2>Login</h2>
        <form onSubmit={onLoginSubmit} className={style["login-form"]}>
          <div>
            {inputs.email.hasError && (
              <label className={style.errorLabel} htmlFor="email">
                {inputs.email.errorMsg}
              </label>
            )}

            <input
              className={inputs.email.hasError && style.errorInput}
              type="text"
              name="email"
              id="email"
              placeholder="Type email here:"
              onChange={onInputChange}
              onBlur={onInputBlur}
              value={inputs.email.value}
            />
          </div>
          <div>
            {inputs.password.hasError && (
              <label className={style.errorLabel} htmlFor="password">
                {inputs.password.errorMsg}
              </label>
            )}

            <input
              className={inputs.password.hasError && style.errorInput}
              type="password"
              name="password"
              id="password"
              placeholder="Type password here:"
              onChange={onInputChange}
              onBlur={onInputBlur}
              value={inputs.password.value}
            />
          </div>
          <button type="submit">login</button>
          <p className={style.message}>
            Not registered? <Link onClick={open}>Create an account</Link>
          </p>
        </form>
      </div>
  );
};
