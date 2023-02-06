import React from "react";

export default function Alert(props) {
    return (
        <>
<<<<<<< HEAD
                {props.alert && 
                <div
                    className={`container alert alert-${props.alert.type} alert-dismissible fade show`}
                    role="alert"
                >
                    <strong>{props.alert.message}</strong>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>}
            
=======
            props.alert && <div
                className={`container alert alert-${props.alerts.type} alert-dismissible fade show`}
                role="alert"
            >
                <strong>{props.alerts.message}</strong>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>
>>>>>>> d483d23d5978b2cd89c7dca31d4d0c792753fa09
        </>
    );
}
