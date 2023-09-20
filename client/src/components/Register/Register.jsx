import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import man from "../../assets/man.png";
import woman from "../../assets/woman.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { register } from "../../services/userService";

import style from "./Register.module.css";
import { UserContext } from "../../contexts/userContext";
import { NotifyContext } from "../../contexts/notificationContext";

import { TextInput } from "../Common/Tron/TextInput";
import { ImageInput } from "../Common/Tron/ImageInput";


export const Register = () => {
  const { setNotify } = useContext(NotifyContext);
  const { setUser } = useContext(UserContext);

  const genderRef = useRef({ checked: true });

  const navigate = useNavigate()
  
  const onRegisterSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target)
    const inputs = Array.from(fd.entries())

    const sentData = inputs.reduce((acc, [key, value]) => Object.assign(acc, {[key]: value}), {})
    // if (inputs.password.value !== inputs.re_password.value) {
    //   return setNotify({
    //     opened: true,
    //     msg: "Sorry, looks like your passwords mismatch",
    //   });
    // }

    register(sentData)
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
            <label htmlFor="fileUpload">
              <ImageInput
                inputAttributes={{
                  type: "file",
                  name: "profileImg",
                  id: "fileUpload",
                  accept: "image/*"
                }}
                imageAttributes={{
                  className: style.uploadedPic,
                  alt: "profilePic",
                  id: "profilePic"
                }}
              />
            </label>
          </div>
          <div>
            <TextInput
              attributes={{
                type: "text",
                name: "email",
                id: "email",
                placeholder: "Type email here: ",
              }}
              errorPredicateFunc={(x) => x.length < 5}
              errorMsg={"This email is too short"}
            />
          </div>

          <div>
            <TextInput
              attributes={{
                type: "password",
                name: "password",
                id: "password",
                placeholder: "Type password here: ",
              }}
              errorPredicateFunc={(x) => x.length < 4}
              errorMsg={"This password is too short"}
            />
          </div>

          <div>
            <TextInput
              attributes={{            
                type: "password",
                name: "re_password",
                id: "re-password",
                placeholder: "Confirm password here: ",
              }}
              //make it match the password field!
              errorPredicateFunc={(x) => x.length < 4}
              errorMsg={"This password is too short"}
            />
          </div>

          <div>
            <TextInput
              attributes={{            
                type: "number",
                name: "workExp",
                id: "workExp",
                placeholder: "What is your work experience?",
              }}
              errorPredicateFunc={(x) => x < 1}
              errorMsg={"You would need more experience!"}
            />
          </div>

          <div>
            <p className={style.labelHeading}>What is your gender?</p>

            <div className={style.radioInputsBox}>
              <div className={style.maleSection}>
                <TextInput
                  attributes={{
                    ref: genderRef,
                    type: "radio",
                    name: "sex",
                    id: "sex-m",
                    defaultChecked: true,
                    value: "male"
                  }}
                />
                <label htmlFor="sex-m">
                  <img src={man} alt="buissnessman" />
                </label>
              </div>
              <div className={style.femaleSection}>
              <TextInput
                  attributes={{
                    type: "radio",
                    name: "sex",
                    id: "sex-f",
                    value: "female"
                  }}
                />
                <label htmlFor="sex-f">
                  <img src={woman} alt="buissnessman" />
                </label>
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
}
