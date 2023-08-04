import img from "../../assets/png.png";
import style from "./Home.module.css";

import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { useState } from "react";

export const Home = () => {
  const [openL, setOpenL] = useState(false);
  const [openR, setOpenR] = useState(false);

  const closeLogin = () => {
    setOpenL(false)
  }
  const closeRegister = () => {
    setOpenR(false)
  }

  return (
    <>
      {(openL && <Login close={closeLogin} />) || (openR && <Register close={closeRegister} />) || (
      <section id={style["home"]}>
        <img src={img} alt="home" />
        <h2>Searching for a job?</h2>
        <div className={style.btnsContainer}>
          <button onClick={() => setOpenR(true)} className={style.redirectBtn}>
            Register
          </button>
          <button onClick={() => setOpenL(true)} className={style.redirectBtn}>
            Login
          </button>
        </div>
      </section>
      )}
    </>
  );
};
