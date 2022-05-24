import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>{props.content}</p>
        <button type="text" onClick={props.showModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
