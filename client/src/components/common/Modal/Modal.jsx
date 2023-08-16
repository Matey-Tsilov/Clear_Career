import style from "./Modal.module.css";

export const Modal = () => {
  return (
    <div className={style.modal}>
      <p>Are you sure you want to delete this file?</p>
      <button>Delete</button>
      <button>Cancel</button>
    </div>
  );
};
