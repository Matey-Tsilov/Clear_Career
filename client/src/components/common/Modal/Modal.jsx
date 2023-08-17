import { useContext } from "react";

import style from "./Modal.module.css";

import { ModalContext } from "../../../contexts/modalContext";

export const Modal = ({ message, onSuccess }) => {
  const { setModal } = useContext(ModalContext);

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h3 className={style.warning}>{message}</h3>
        <div className={style.btns}>
          <button
            onClick={() => {
              setModal({ opened: false, msg: "" });
              onSuccess();
            }}
          >
            Confirm
          </button>
          <button onClick={() => setModal({ opened: false, msg: "" })}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
