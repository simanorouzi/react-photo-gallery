import * as React from 'react';
import PhotoItem from '../Component/PhotoItem';
import {
  FetchOutputType,
  HttpRequestType,
  method,
  PhotoType,
  UseHttpType,
} from '../Component/Types';
import UseHttpHook from '../Hooks/UseHttpHook';

let emlementHandler = <p></p>;
const Photos = (props: { id: number }) => {
  const [photos, setPhotos] = React.useState<PhotoType[]>([]);

  const applyFunction = (photoData) => {
    setPhotos(photoData);
  };
  const fetchParams: UseHttpType = {
    url: `https://jsonplaceholder.typicode.com/photos?albumId=${props.id}`,
    request: { methodType: method.Get },
    applyFunction: applyFunction,
  };

  const { isLoading, error, doFetch } = UseHttpHook();

  React.useEffect(() => {
    doFetch(fetchParams);
  }, []);

  return (
    <div className="photo-list">
      {isLoading && !error && <p>Data Is Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && photos.length === 0 && (
        <div>No Item Founded!</div>
      )}
      {!isLoading &&
        !error &&
        photos &&
        photos.map((photo) => <PhotoItem key={photo.id} photo={photo} />)}
    </div>
  );
};

export default Photos;
