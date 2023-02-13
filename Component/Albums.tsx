import * as React from 'react';
import AlbumItem from '../Component/AlbumItem';
import { AlbumType } from '../Component/Types';
const Albums = () => {
  const [albums, setAlbums] = React.useState<AlbumType[]>([]);

  async function fetchAlbum() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    setAlbums(data);
  }

  React.useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Albums;
