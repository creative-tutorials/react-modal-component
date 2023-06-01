# react-modal-component

Steps To begin using RMC

- ## Step1: Extract the `modal.tsx` and `modal.module.css` from their folders

![image](https://github.com/creative-tutorials/react-modal-component/assets/68476321/4b02eafb-7ee3-4796-b7ff-17ec3c6e64f8)

- ### Step2: Copy the files you extracted into your _codebase_

> **Note**: These files are located in the `node_modules` folder

- ### Step3: Make sure you've `react-lazy-load-image-component` installed

- ### Step4: Create a state for the modal, This state will be placed where you're importing this component from

> Exmaple: The state can be in your `App.tsx` folder for React and `index.tsx` folder for NextJS

```tsx
const [modalState, setModalState] = useState({ isModal: false, message: "" });
```

- ### Step5: Create a function for the show/hide of the modal

```tsx
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
  ```
  
- ### Step 4: Import the style

In step4 you need to import the style so your modal will looks great.

```tsx
import modalcss from "./styles/modal.module.css";
```

Full Code Should looks something like this

```tsx
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import { useState, useEffect, MouseEventHandler, lazy } from "react";
const ReactModalComponent = lazy(() => import('../../components/function/modal/ReactModalComponent'));


function App() {
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
    <>
      <LazyLoadComponent>
      <ReactModalComponent
        isModal={modalState.isModal}
        performTwoFunctions={performTwoFunctions}
        hideModal={hideModal}
      />
    </LazyLoadComponent>
  );
}
export default App;
```

> _Your codebase can be different from mine, the main thing is you importing the component, the style, and add and also call the functions_
