import * as React from 'react';
import { ToastType } from '../Component/Types';
import ReactDom from 'react-dom';
import Styles from './ToastModal.module.css';

const BackDrop = (props: ToastType) => {
  return <div className={Styles.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props: ToastType) => {
  return (
    <div className={Styles.overlay}>
      <div>{props.children}</div>
      <button onClick={props.onConfirm}>Close</button>
    </div>
  );
};
const ToastModal = (props: ToastType) => {
  const toastElement = document.getElementById('toastModal');
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        toastElement
      )}
      {ReactDom.createPortal(
        <Overlay onConfirm={props.onConfirm} children={props.children} />,
        toastElement
      )}
    </React.Fragment>
  );
};

export default ToastModal;
