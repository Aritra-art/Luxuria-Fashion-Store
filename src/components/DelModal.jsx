import { useState } from "react";
import "./DelModal.css";
import { removeFromCartHandler } from "../utils/removeFromCartHandler";
import { isItemPresentInCart } from "../utils/addToCartHandler";
import { successToastMsg } from "./ProductCard";

export const DelModal = ({ id, setDelModal, dispatchData, dataState }) => {
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
          onClick={(e) => {
            e.target.innerText = "Deleting . . . ";
            removeFromCartHandler(dispatchData, id);
            successToastMsg("Item Removed From Cart");
            if (!isItemPresentInCart(dataState, id)) {
              setDelModal((delModal) => ({ ...delModal, [id]: false }));
            }
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
