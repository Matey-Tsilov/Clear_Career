import style from './Details.module.css'
import img from '../../assets/example1.png'

export const Details = () => {

  
    return (
    <section id={style.details}>
    <div id={style["details-wrapper"]}>
      <img id={style["details-img"]} src={img} alt="example1" />
      <p id={style["details-title"]}>Senior Frontend Software Engineer</p>
      <p id={style["details-category"]}>
        Category: <span id={style["categories"]}>IT, Developer, WEB</span>
      </p>
      <p id={style["details-salary"]}>
        Salary: <span id={style["salary-number"]}>7000</span>
      </p>
      <div id={style["info-wrapper"]}>
        <div id={style["details-description"]}>
          <h4>Description</h4>
          <span>
            We are looking for programmers with a keen eye for design for the
            position of front end developer. Front end developers are
            responsible for ensuring the alignment of web design and user
            experience requirements, optimizing web pages for maximum
            efficiency, and maintaining brand consistency across all web
            pages, among other duties.
          </span>
        </div>
        <div id={style["details-requirements"]}>
          <h4>Requirements</h4>
          <span>
            Degree in computer science or related field. Understanding of key
            design principles. Proficiency in HTML, CSS, JavaScript.
            Experience with responsive and adaptive design. Good
            problem-solving skills. Excellent verbal communication skills.
            Good interpersonal skills.
          </span>
        </div>
      </div>
      <p>
        Applications: <strong id={style["applications"]}>1</strong>
      </p>
      {/*Edit and Delete are only for creator*/}
      <div id={style["action-buttons"]}>
        <a href="" id="edit-btn">
          Edit
        </a>
        <a href="" id="delete-btn">
          Delete
        </a>
        {/*Bonus - Only for logged-in users ( not authors )*/}
        <a href="" id="apply-btn">
          Apply
        </a>
      </div>
    </div>
  </section>)
}