import React,{ useEffect } from 'react'
import '/src/styles/modal.css'

function Failed({ closeFModal }) {
    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "";
        }
    }, []);
    return (
        <>
            <div className="overlay" onClick={ closeFModal }></div>
            <div className="successmodal">
                <button className="cross" onClick={ closeFModal }>
                    ×
                </button>
                <lottie-player
                    src="https://assets6.lottiefiles.com/packages/lf20_f09c9g7f.json"
                    background="transparent"
                    speed={0.5}
                    style={{ width: 200, height: 200 }}
                    loop=""
                    autoPlay=""
                />
                <h1>Failed!</h1>
                <p>Sorry! Please Try Again</p>
                <button className="Ok" onClick={ closeFModal }>
                    Ok
                </button>
            </div>
        </>
    )
}

export default Failed