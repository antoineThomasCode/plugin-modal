import React from "react";


function Modal ({children, setModalState}) {


    function handleCloseModal (e) {
        e.preventDefault()
        setModalState(false)
    }

    return (
        <div className="modal-container">
            <button className="modal-close" onClick={(e) => handleCloseModal(e)}>X</button>
            {children}
        </div>
    )
}

export default Modal