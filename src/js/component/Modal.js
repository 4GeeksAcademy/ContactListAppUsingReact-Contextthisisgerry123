import React from "react";

export const Modal = ({ closeModal, confirmDelete }) => {
  return (
    <div className="modal d-flex" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are You Sure?</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>If you delete contact, Deadpool will get you</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Oh No!
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={confirmDelete}
            >
              Yeah Baby!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
