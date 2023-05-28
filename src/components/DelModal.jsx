import { useState } from "react";
import "./DelModal.css";
import { removeFromCartHandler } from "../utils/removeFromCartHandler";

export const DelModal = ({ id, setDelModal, dispatchData }) => {
  return (
    <div className="del-modal-layout">
      Do you want to delete this Product ?
      <div className="del-modal-btn">
        <button
          className="del-modal-no-btn"
          onClick={() => {
            setDelModal((delModal) => ({ ...delModal, [id]: false }));
          }}
        >
          No
        </button>
        <button
          className="del-modal-yes-btn"
          onClick={() => {
            setDelModal((delModal) => ({ ...delModal, [id]: false }));
            removeFromCartHandler(dispatchData, id);
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
