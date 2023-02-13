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

const Photos = (props: { id: number }) => {
  const [photos, setPhotos] = React.useState<PhotoType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  // const fetchParams: UseHttpType = {
  //   url: `https://jsonplaceholder.typicode.com/photos?albumId=${props.id}`,
  //   request: { methodType: method.Get },
  // };

  async function GetPhotos() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${props.id}`
      );
      if (!response.ok) {
        throw new Error('Something went Wrong!');
      }
      const data = await response.json();

      setIsLoading(false);
      setPhotos(data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }

  React.useEffect(() => {
    GetPhotos();
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
