import { useNavigate } from "react-router-dom";

import img from "../../assets/png.png";
import style from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <section id={style["home"]}>
        <img src={img} alt="home" />
        <h2>Searching for a job?</h2>
        <div className={style.btnsContainer}>
          <button onClick={() => navigate('/register')} className={style.redirectBtn}>
            Sign Up!
          </button>
        </div>
      </section>
    </>
  );
};
