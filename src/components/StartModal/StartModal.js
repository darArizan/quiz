import React from 'react'
import './StartModal.scss'
function StartModal({startModal, setStartModal}) {

    function handleStartModal() {
        setStartModal(true)
    }

    return (
        <div className={`modal ${startModal ? 'modal--active' : ''}`}>
           <button className="modal__button" onClick={handleStartModal}>Start quiz</button> 
        </div>
    )
}

export default StartModal