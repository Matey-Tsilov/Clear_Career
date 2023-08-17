import { useParams, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import style from './Details.module.css'

import * as offerService from '../../services/offerService'
import { NotifyContext } from '../../contexts/notificationContext'
import { Modal } from '../Common/Modal/Modal'
import { ModalContext } from '../../contexts/modalContext'

export const Details = () => {
const {id} = useParams()
const [offer, setOffer] = useState({})

const {setNotify} = useContext(NotifyContext)
const {modal, setModal} = useContext(ModalContext)

useEffect(() => {
offerService.getById(id)
.then(res => setOffer(res))
.catch(err => setNotify({opened: true, msg: err.message}))
}, [])

const onSuccess = () => {

}
    return (
      <>
      {modal.opened && <Modal message={modal.msg} onSuccess={onSuccess}/>}
      <section id={style.details}>
      <div id={style["details-wrapper"]}>
        <img id={style["details-img"]} src={offer.imageUrl} alt="example1" />
        <p id={style["details-title"]}>{offer.title}</p>
        <p id={style["details-category"]}>
          Category: <span id={style["categories"]}>{offer.category}</span>
        </p>
        <p id={style["details-salary"]}>
          Salary: <span id={style["salary-number"]}>{offer.salary}</span>
        </p>
        <div id={style["info-wrapper"]}>
          <div id={style["details-description"]}>
            <h4>Description</h4>
            <span>{offer.description}</span>
          </div>
          <div id={style["details-requirements"]}>
            <h4>Requirements</h4>
            <span>{offer.requirements}</span>
          </div>
        </div>
        <p>
          Applications: <strong id={style["applications"]}>1</strong>
        </p>
        {/*Edit and Delete are only for creator*/}
        <div id={style["action-buttons"]}>
          <Link to={`/edit/${offer._id}`} id="edit-btn">
            Edit
          </Link>
          <Link onClick={() => setModal({opened: true, msg: "Are you sure you want to delete this record?"})} id="delete-btn">
            Delete
          </Link>
          {/*Bonus - Only for logged-in users ( not authors )*/}
          <Link id="apply-btn">
            Apply
          </Link>
        </div>
      </div>
    </section>
    </>)
}