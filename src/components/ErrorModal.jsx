import { FaExclamation, FaTimes } from "react-icons/fa";

const getBgColor = (type) => {
  switch (type) {
    case MODAL_TYPES.SUCCESS:
      return 'green-500';
    case MODAL_TYPES.WARNING:
      return 'ruta_yellow-dark';
    case MODAL_TYPES.ERROR:
      return 'red-500';
    default:
      return 'ruta_blue';
  }
}

export default function ErrorModal(props) {
  return (
    <div className={`modal ${props.visible ? 'show' : ''}`}>
      <div className="modal__container">
        <button onClick={props.onClose} className="modal__container__close">
          <FaTimes size={24} />
        </button>
        <div className={`modal__container__header bg-${getBgColor(props.type)}`}>
          <div className="modal__container__header__icon">
            <FaExclamation size={40} />
          </div>
        </div>
        <div className="modal__container__content">
          <h4 className="h5">
            {props.title ?? 'Attenzione!'}
          </h4>
          <p>
            {props.description ?? 'Si è verificato un errore'}
          </p>
        </div>
      </div>
    </div>
  );
}

export const MODAL_TYPES = {
  SUCCESS: 0,
  WARNING: 1,
  ERROR: 2,
}
