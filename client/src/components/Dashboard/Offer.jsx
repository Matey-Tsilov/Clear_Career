import style from "./Dashboard.module.css"
import { Link } from "react-router-dom";

export const Offer = ({offer}) => {
    return (
        <div className={style.offer}>
        <img src={offer.imageUrl} alt="example1" />
        <p>
          <strong>Title: </strong>
          <span className={style.title}>{offer.title}</span>
        </p>
        <p>
          <strong>Salary:</strong>
          <span className={style.salary}>{offer.salary}</span>
        </p>
        <Link className={style["details-btn"]} to={`details/${offer._id}`}>
          Details
        </Link>
      </div>
    )
}