import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../api/api";
import style from "./Register.module.css";
import { UserContext } from "../../contexts/userContext";

export const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    re_password: "",
    workExp: "",
  });
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const onInputChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    setInputs((old) => ({ ...old, ...change }));
  };
  const onRegisterSubmit = (e) => {
    e.preventDefault();

    if (inputs.password !== inputs.re_password) {
      return alert("Sorry, looks like your passwords mismatch");
    }

    const send = {
      email: inputs.email.trim(),
      password: inputs.password.trim(),
      workExp: inputs.workExp.trim(),
    };

     register(send).then(res => {
         setUser(res)
         navigate('/')
     })

  };

  return (
    <section id="register">
      <div className={style.form}>
        <h2>Register</h2>
        <form className={style["login-form"]} onSubmit={onRegisterSubmit}>
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="Type your email here:"
            value={inputs.email}
            onChange={onInputChange}
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="Type your password here:"
            value={inputs.password}
            onChange={onInputChange}
          />
          <input
            type="password"
            name="re_password"
            id="repeat-password"
            placeholder="Repeat password"
            value={inputs.re_password}
            onChange={onInputChange}
          />
          <input
            type="number"
            min="1"
            max="25"
            name="workExp"
            id="experience"
            placeholder="Working experience"
            value={inputs.workExp}
            onChange={onInputChange}
          />
          <button type="submit">register</button>
          <p className={style.message}>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
