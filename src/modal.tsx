// Import the ReactModalComponent
// Add a state from where you are importing the component from
// Must be using React Latest Version
// Should be using Typescript
import { MouseEventHandler } from "react";
import modalcss from "./styles/modal.module.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useState } from "react";
import React from "react";
export default function ReactModalComponent(props: {
  isModal: any;
  hideModal: MouseEventHandler<HTMLButtonElement> | undefined;
  performTwoFunctions: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
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
          <button id={modalcss.cancel} onClick={props.hideModal}>
            Cancel
          </button>
          <button id={modalcss.reset} onClick={props.performTwoFunctions}>
            Reset
          </button>
        </div>
      </div>
    </LazyLoadComponent>
  );
}
