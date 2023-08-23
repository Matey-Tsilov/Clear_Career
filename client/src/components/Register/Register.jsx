import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import man from '../../assets/man.png'
import woman from '../../assets/woman.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { register } from "../../services/userService";
import style from "./Register.module.css";
import { UserContext } from "../../contexts/userContext";
import { NotifyContext } from "../../contexts/notificationContext";

export const Register = () => {
  const { setNotify } = useContext(NotifyContext);
  const { setUser } = useContext(UserContext);
  //Такъв му е defaultState-a за да може при първи ререндър стойността да е male(когато изпращаме до сървър)!
  const myRef = useRef({ checked: true });

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: { value: "", hasError: false, errorMsg: "" },
    password: { value: "", hasError: false, errorMsg: "" },
    re_password: { value: "", hasError: false, errorMsg: "" },
    workExp: { value: "", hasError: false, errorMsg: "" },
  });

  const onInputChange = (e) => {
    const changedProp = e.target.name;
    const change = {
      [changedProp]: {
        value: e.target.value,
        hasError: inputs[changedProp].hasError,
        errorMsg: inputs[changedProp].errorMsg,
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
      },
    };

    if (inputCur.name === "email" && inputCur.value.length < 10) {
      change[inputCur.name].hasError = true;
      change[inputCur.name].errorMsg =
        "Email needs to be at least 10 characters";
    } else if (inputCur.name === "password" && inputCur.value.length <= 3) {
      change[inputCur.name].hasError = true;
      change[inputCur.name].errorMsg =
        "This password is too easy. You need a better one";
    } else if (
      inputCur.name === "re_password" &&
      inputCur.value !== inputs.password.value &&
      inputCur.value === ""
    ) {
      change[inputCur.name].hasError = true;
      change[inputCur.name].errorMsg = "Passwords mismatch";
    }
    setInputs((before) => ({ ...before, ...change }));
  };
  const onRegisterSubmit = (e) => {
    e.preventDefault();

    if (inputs.password.value !== inputs.re_password.value) {
      return setNotify({
        opened: true,
        msg: "Sorry, looks like your passwords mismatch",
      });
    }

    const send = {
      email: inputs.email.value.trim(),
      password: inputs.password.value.trim(),
      workExp: inputs.workExp.value.trim(),
      sex: myRef.current?.checked ? "male" : "female",
    };

    register(send)
      .then((res) => {
        setUser(res);
        navigate("/dashboard");
      })
      .catch((err) => setNotify({ opened: true, msg: err.message }));
  };
  return (
    <section id="register">
      <div className={style.form}>
        <FontAwesomeIcon
          onClick={() => navigate("/")}
          size="xl"
          className={style.icon}
          icon={faCircleXmark}
        />
        <h2>Register</h2>

        <form className={style["login-form"]} onSubmit={onRegisterSubmit}>
          <div className={style.upload_pic}>
            <input type="file" id="fileUpload" />
          </div>
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

          <div>
            {inputs.re_password.hasError && (
              <label className={style.errorLabel} htmlFor="re_password">
                {inputs.re_password.errorMsg}
              </label>
            )}

            <input
              className={inputs.re_password.hasError && style.errorInput}
              type="password"
              name="re_password"
              id="re_password"
              placeholder="Confirm password here:"
              onChange={onInputChange}
              onBlur={onInputBlur}
              value={inputs.re_password.value}
            />
          </div>

          <div>
            {inputs.workExp.hasError && (
              <label className={style.errorLabel} htmlFor="workExp">
                {inputs.workExp.errorMsg}
              </label>
            )}

            <input
              className={inputs.workExp.hasError && style.errorInput}
              type="number"
              name="workExp"
              id="workExp"
              placeholder="Type workExp here:"
              onChange={onInputChange}
              onBlur={onInputBlur}
              value={inputs.workExp.value}
            />
          </div>

          <div>
            <p className={style.labelHeading}>What is your gender?</p>

            <div className={style.radioInputsBox}>
              <div className={style.maleSection}>
                <label htmlFor="sex-m"><img src={man} alt="buissnessman" /></label>
                <input
                  ref={myRef}
                  type="radio"
                  name="sex"
                  id="sex-m"
                  value="male"
                  defaultChecked
                />
              </div>
              <div className={style.femaleSection}>
                <label htmlFor="sex-f"><img src={woman} alt="buissnessman" /></label>
                <input type="radio" name="sex" id="sex-f" value="female" />
              </div>
            </div>
          </div>
          <button type="submit">register</button>
          <p className={style.message}>
            Already registered? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
