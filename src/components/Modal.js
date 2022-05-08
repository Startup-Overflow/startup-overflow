import "./Modal.css";
import { Button } from "./Button";
function Modal({ closeModal }) {
  const closeModalHandler = (e) => {
    e.preventDefault();
    closeModal(false);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Button onClick={closeModalHandler}>X</Button>
        <div className="modalRegistration">
          <label id="modalName">Enter Full Name</label>
          <input type="text" id="modalName" placeholder="Enter Full Name" />
          <label id="modalMail">Enter Email ID</label>
          <input type="Email" id="modalMail" placeholder="Enter Email ID" />
        </div>
      </div>
    </div>
  );
}
export default Modal;
