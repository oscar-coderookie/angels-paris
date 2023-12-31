import React, {useState} from 'react';
import './ContactPage.scss';

const ContactPage = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes manejar la lógica para enviar el formulario o mostrar los datos.
      console.log('Nombre:', nombre);
      console.log('Correo:', correo);
      console.log('Mensaje:', mensaje);
    };
  return (
    <div className="contact-container">
      <h2 className='contact__title'>Contacta al Director del Club:</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default ContactPage