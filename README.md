# react-modal-component

Steps To begin using this package

- Step1: Go to the `node_modules` folder, look for the folder named `devtreasure-react-modal-component` copy the modal.tsx from the `src folder` and for the style copy the `modal.module.css` from the styles folder.

- Step2: Paste those into your codebase directly into your `componets folder`

![image](https://github.com/creative-tutorials/react-modal-component/assets/68476321/4b02eafb-7ee3-4796-b7ff-17ec3c6e64f8)

- Step3: Make sure you've `react-lazy-load-image-component` installed

- Step4: In the src folder, you'll see a `state.tsx` file. Copy the state properties used, into your codebase

> **Note**: Do not copy the function wrapper. Just copy the state properties alone
> **Example:** Should look something like this 👇

```tsx
const [modalState, setModalState] = useState({ isModal: false, message: "" });
```

- Step5: Go to the function folder located at `node_modules/devtreasure-react-modal-component/function`. Then copy the show and hide function into your codebase where you imported the modal from
  
- Step 4: Importing the style
No need to worry about this one, it's already done. Just make sure you change the path. for example yours could look something like this
`/styles/modal.module.css` or `/styles/animation/modal.module.css`

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
