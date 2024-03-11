import { Modal, Box, Typography } from "@mui/material";
import { FaExclamation, FaTimes } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorModal(props) {
  return (
    <div className={`modal ${props.visible ? 'show' : ''}`}>
      <div className="modal__container">
        <button onClick={props.onClose} className="modal__container__close">
          <FaTimes size={24} />
        </button>
        <div className="modal__container__header">
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

  // return (
  //   <Modal
  //     open={props.visible}
  //     // onClose={onClose}
  //     aria-labelledby="modal-modal-title"
  //     aria-describedby="modal-modal-description"
  //   >
  //     <div className={`modal shake fade`}>
  //       <div className="modal-header py-2">
  //         <MdErrorOutline
  //           size={80}
  //         />
  //       </div>
  //       <div className="modal-content">
  //         <Typography id="modal-modal-title" variant="h6" component="h2">
  //           Errore durante il login!
  //         </Typography>
  //         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //           Si è verificato un errore, ricontrolla i dati inseriti.
  //         </Typography>
  //         <button
  //           onClick={props.onClose}
  //           type="button"
  //           className="text-red-500 font-bold mt-4"
  //         >
  //           Riprova
  //         </button>
  //       </div>
  //     </div>
  //   </Modal>
  // );

  // return (
  //   <div
  //     className={`modal ${visible ? "show" : ""} fade`}
  //     tabIndex="-1"
  //     role="dialog"
  //     aria-labelledby="mySmallModalLabel"
  //     aria-hidden="true"
  //     style={{
  //       display: visible ? "block" : "none",
  //       backdropFilter: visible ? "blur(5px)" : "none",
  //       backgroundColor: visible ? "rgba(0, 0, 0, 0.3)" : "transparent",
  //     }}
  //   >
  //     <div className={`modal-dialog modal-md ${visible ? "shake" : ""}`}>
  //       <div className="modal-content">
  //         <div className="modal-header">
  //             <MdErrorOutline
  //               size={120}
  //             />
  //         </div>
  //         <div className="modal-body text-center p-4">
  //           <h2 className="font-bold text-2xl">Errore durante il Login!</h2>
  //           <h3 className="font-semibold text-lg my-3 text-secondary">
  //             Si è verificato un errore, ricontrolla i dati inseriti.
  //           </h3>

  //           <button
  //             onClick={onClose}
  //             type="button"
  //             className="btn btn-warning text-gray-100 font-semibold mt-3"
  //           >
  //             Riprova
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
