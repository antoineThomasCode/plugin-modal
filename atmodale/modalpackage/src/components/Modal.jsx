import React, {useEffect} from "react";
import './style/modal.scss'

function Modal ({children, setModalState, title}) {


    function handleCloseModal (e) {
        e.preventDefault()
        setModalState(false)
    }
    const closeOnEscape = (e) => {
        if ((e.charcode || e.keyCode) === 27) {
          handleCloseModal(e);
        }
      };
    
      useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscape);
        return function cleanup() {
          document.body.removeEventListener("keydown", closeOnEscape);
        };
      }, []);

    return (
        <div className="modal-container">
            <button className="modal-close" onClick={(e) => handleCloseModal(e)}>✕</button>
            <div className="modal-content">
                {title && (<h2>{title}</h2>)}
                {children}
            </div>
        </div>
    )
}

export default Modal