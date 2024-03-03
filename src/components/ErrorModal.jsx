import { Modal, Box, Typography } from "@mui/material";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorModal({ visible, onClose }) {
  return (
    <Modal
      open={visible}
      // onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal shake fade`}>
        <div className="modal-header py-2">
          <MdErrorOutline
            size={80}
          />
        </div>
        <div className="modal-content">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Errore durante il login!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Si è verificato un errore, ricontrolla i dati inseriti.
          </Typography>
          <button
            onClick={onClose}
            type="button"
            className="text-red-500 font-bold mt-4"
          >
            Riprova
          </button>
        </div>
      </Box>
    </Modal>
  );
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
