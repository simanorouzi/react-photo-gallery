import * as React from 'react';
import Photos from '../Component/Photos';
import { AlbumType } from '../Component/Types';
import ToastModal from '../UI/ToastModal';

const AlbumItem = (props: AlbumType) => {
  const [showModal, setShowModal] = React.useState(false);
  const ClickHandler = () => {
    setShowModal(true);
  };

  const ConfirmHandler = () => {
    setShowModal(false);
  };
  return (
    <React.Fragment>
      {showModal && (
        <ToastModal onConfirm={ConfirmHandler}>
          <Photos id={props.id} />
        </ToastModal>
      )}
      <li>
        <a href="#" onClick={ClickHandler}>
          {props.title}
        </a>
      </li>
    </React.Fragment>
  );
};

export default AlbumItem;
