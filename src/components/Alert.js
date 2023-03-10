import React from "react";

export default function Alert(props) {
    return (
        <>
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
        </>
    );
}
