import * as React from 'react';
import AlbumItem from '../Component/AlbumItem';
import { AlbumType, method, UseHttpType } from '../Component/Types';
import UseHttpHook from '../Hooks/UseHttpHook';
const Albums = () => {
  const [albums, setAlbums] = React.useState<AlbumType[]>([]);

  const { isLoading, error, doFetch } = UseHttpHook();

  React.useEffect(() => {
    const applyFunction = (albumData) => {
      setAlbums(albumData);
    };
    const httpParams: UseHttpType = {
      url: 'https://jsonplaceholder.typicode.com/albums',
      request: { methodType: method.Get },
      applyFunction: applyFunction,
    };
    doFetch(httpParams);
  }, []);

  return (
    <React.Fragment>
      <div className="photo-list">
        {isLoading && !error && <p>Data Is Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && albums.length === 0 && (
          <div>No Item Founded!</div>
        )}
        {!isLoading && !error && albums && (
          <ul className="albums">
            {albums.map((album) => (
              <AlbumItem
                title={album.title}
                key={album.id}
                id={album.id}
                userId={album.userId}
              />
            ))}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};

export default Albums;
