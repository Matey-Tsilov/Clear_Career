import { useContext } from "react";

import style from "./Modal.module.css";

import { ModalContext } from "../../../contexts/modalContext";

export const Modal = ({message, onSuccess}) => {
    const {setModal} = useContext(ModalContext);

  return (
    <div className={style.modal}>
      <h3 className="warning">{message}</h3>
      <button className={style.btn} onClick={() => {
        setModal({opened: false, msg:''})
        onSuccess()
        }}>Confirm</button>
      <button className={style.btn} onClick={() => 
        setModal({opened: false, msg:''}
        )}>Cancel</button>
    </div>
  );
};
