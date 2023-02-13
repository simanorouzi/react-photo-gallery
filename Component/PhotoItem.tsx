import * as React from 'react';
import Photos from '../Component/Photos';
import { PhotoType } from '../Component/Types';

const PhotoItem = (props: { photo: PhotoType }) => {
  return (
    <React.Fragment>
      <a href={props.photo.url}>
        <img src={props.photo.url} title={props.photo.thumbnailUrl} />
        <span>{props.photo.title}</span>
      </a>
    </React.Fragment>
  );
};

export default PhotoItem;
