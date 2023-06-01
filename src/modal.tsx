// Create a state
import { MouseEventHandler } from "react";
import modalcss from "./styles/modal.module.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import React from "react";
import { useState } from "react";
export default function ReactModalComponent(props: {
  isModal: any;
  hideModal: MouseEventHandler<HTMLButtonElement> | undefined;
  performTwoFunctions: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const [modalState, setModalState] = useState({ isModal: false, message: "" });
  const showModal = () => {
    setModalState((prevState) => {
      return {
        ...prevState,
        isModal: true,
      };
    });
  };
  const hideModal = () => {
    setModalState((prevState) => {
      return {
        ...prevState,
        isModal: false,
      };
    });
  };
  return (
    <LazyLoadComponent>
      <div
        className={modalcss.tooltip}
        id={props.isModal ? modalcss.active : modalcss.inactive}
      >
        <span>
          <i className="fa-solid fa-triangle-exclamation"></i>
          Please use this option only for analytics data issues. Resetting will
          irreversibly clear your data.
        </span>
        <div className={modalcss.tooltip_buttons}>
          <button id={modalcss.cancel} onClick={hideModal}>
            Cancel
          </button>
          <button id={modalcss.reset} onClick={() => console.log("hello")}>
            Reset
          </button>
        </div>
      </div>
    </LazyLoadComponent>
  );
}
