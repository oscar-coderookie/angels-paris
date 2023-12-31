import React from 'react';
import './NewsPage.scss';

const NewsPage = () => {
  const noticias = [
    {
      id: 1,
      imagen: 'https://www.bloomberglinea.com/resizer/6aLysAqN5WWYg4aGUuvigO-iWL8=/arc-photo-bloomberglinea/arc2-prod/public/RTOM2XKFUVGLFGDDIQZGPB6B5E.jpg',
      fecha: '01 de enero de 2023',
      titulo: 'Título de la Noticia 1',
      resumen: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam unde ea, delectus quia sint veniam nemo assumenda necessitatibus voluptate illo aliquam. Fugit amet quia optio, consequuntur deserunt in et. ',
      autor: 'Autor 1',
    },
    {
      id: 2,
      imagen: 'https://static01.nyt.com/images/2023/11/22/multimedia/24col-vzla-baseball-ESP-00/00colombia-venezuela-baseball-tcwg-mediumSquareAt3X.jpg',
      fecha: '05 de enero de 2023',
      titulo: 'Título de la Noticia 2',
      resumen: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam unde ea, delectus quia sint veniam nemo assumenda necessitatibus voluptate illo aliquam. Fugit amet quia optio, consequuntur deserunt in et. ',
      autor: 'Autor 2',
    },
    // Agrega más noticias según sea necesario
  ];

  return (
    <div className="news-container">
      <h2 className='news__title'>Últimas Noticias</h2>
      {noticias.map((noticia) => (
        <div key={noticia.id} className="noticia-item">
          <img className='news__img' src={noticia.imagen} alt={`Imagen de ${noticia.titulo}`} />
          <div className="contenido-noticia">
            <p className="fecha">{noticia.fecha}</p>
            <h3 className='news__title'>{noticia.titulo}</h3>
            <p className="news__condensed">{noticia.resumen}</p>
            <div className="news__fieldset">
            <p className="news__label">Por: </p>
              <p className='news__infotitle'>{noticia.autor}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;