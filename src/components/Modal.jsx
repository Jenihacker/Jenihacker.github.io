import React,{ useEffect } from 'react'
import '/src/styles/modal.css'

function Modal({ closeModal }) {
    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "";
        }
    }, []);
    return (
        <>
            <div className="overlay" onClick={ closeModal }></div>
            <div className="successmodal">
                <button className="cross" onClick={ closeModal }>
                    ×
                </button>
                <lottie-player
                    src="https://assets6.lottiefiles.com/private_files/lf30_nsqfzxxx.json"
                    background="transparent"
                    speed={1}
                    style={{ width: 200, height: 200 }}
                    loop=""
                    autoPlay=""
                />
                <h1>Success!</h1>
                <p>Thank You for you're response</p>
                <button className="Ok" onClick={ closeModal }>
                    Ok
                </button>
            </div>
        </>
    )
}

export default Modal