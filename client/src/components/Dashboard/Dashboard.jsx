import style from "./Dashboard.module.css"

import img1 from '../../assets/example1.png'
import img2 from '../../assets/example2.png'
import img3 from '../../assets/example3.png'


export const Dashboard = () => {
    return (
        <section id="dashboard">
      <h2>Job Offers</h2>
      {/* Display a div with information about every post (if any)*/}
      <div className={style.offer}>
        <img src={img1} alt="example1" />
        <p>
          <strong>Title: </strong>
          <span className={style.title}>Sales Manager</span>
        </p>
        <p>
          <strong>Salary:</strong>
          <span className={style.salary}>1900</span>
        </p>
        <a className={style["details-btn"]} href="">
          Details
        </a>
      </div>
      <div className={style.offer}>
        <img src={img2} alt="example2" />
        <p>
          <strong>Title: </strong>
          <span className={style.title}>Senior Frontend Software Engineer</span>
        </p>
        <p>
          <strong>Salary:</strong>
          <span className={style.salary}>7000</span>
        </p>
        <a className={style["details-btn"]} href="">
          Details
        </a>
      </div>
      <div className={style.offer}>
        <img src={img3} alt="./images/example3.png" />
        <p>
          <strong>Title: </strong>
          <span className={style.title}>Invoice Administrator</span>
        </p>
        <p>
          <strong>Salary:</strong>
          <span className={style.salary}>1700</span>
        </p>
        <a className={style["details-btn"]} href="">
          Details
        </a>
      </div>
      {/* Display an h2 if there are no posts */}
      <h2>No offers yet.</h2>
    </section>
    )
}
