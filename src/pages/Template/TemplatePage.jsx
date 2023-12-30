import React from 'react';
import './TemplatePage.scss';

const TemplatePage = ({name, imageUrl}) => {
  return (
    <div className='template__block'>
        <img src={imageUrl} alt={imageUrl} />
        <h2>{name}</h2> 
    </div>
  )
}

export default TemplatePage