import React from 'react';
import './NewsPage.scss';

const NewsPage = () => {
  const noticias = [
    {
      id: 1,
      imagen: 'https://www.bloomberglinea.com/resizer/6aLysAqN5WWYg4aGUuvigO-iWL8=/arc-photo-bloomberglinea/arc2-prod/public/RTOM2XKFUVGLFGDDIQZGPB6B5E.jpg',
      fecha: '01 de enero de 2023',
      titulo: 'Título de la Noticia 1',
      resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      autor: 'Autor 1',
    },
    {
      id: 2,
      imagen: 'https://static01.nyt.com/images/2023/11/22/multimedia/24col-vzla-baseball-ESP-00/00colombia-venezuela-baseball-tcwg-mediumSquareAt3X.jpg',
      fecha: '05 de enero de 2023',
      titulo: 'Título de la Noticia 2',
      resumen: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      autor: 'Autor 2',
    },
    // Agrega más noticias según sea necesario
  ];

  return (
    <div className="noticias-container">
      <h2>Últimas Noticias</h2>
      {noticias.map((noticia) => (
        <div key={noticia.id} className="noticia-item">
          <img className='news__img' src={noticia.imagen} alt={`Imagen de ${noticia.titulo}`} />
          <div className="contenido-noticia">
            <p className="fecha">{noticia.fecha}</p>
            <h3>{noticia.titulo}</h3>
            <p className="resumen">{noticia.resumen}</p>
            <p className="autor">Por {noticia.autor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;