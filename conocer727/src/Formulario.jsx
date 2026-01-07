// conocer727/src/components/Formulario.jsx

import React, { useState } from 'react';
import axios from 'axios'; 

// La URL de tu backend de Django (http://localhost:8000 en desarrollo)
const URL_API = import.meta.env.VITE_DJANGO_URL; 

export default function Formulario() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    opcion: 'opcion1', // Asegúrate de que este campo coincida con tu modelo de Django
  });
  const [mensaje, setMensaje] = useState(''); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos(prevDatos => ({
      ...prevDatos,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setMensaje('Enviando...');

    try {
      // 🚨 Petición POST a la API de Django 🚨
      // La ruta final de tu CRUD es /api/mensajes/
      const response = await axios.post(`${URL_API}/api/mensajes/`, datos); 
      
      console.log('Respuesta del servidor:', response.data);
      setMensaje('✅ ¡Mensaje enviado con éxito! Guardado en la base de datos.');
      setDatos({ nombre: '', email: '', opcion: 'opcion1' }); // Limpiar formulario

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMensaje('❌ Error al enviar. Verifica tu conexión con el backend.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>📝 Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo Nombre */}
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={datos.nombre} onChange={handleChange} required />
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={datos.email} onChange={handleChange} required />
        </div>

        {/* Campo de Selección */}
        <div>
          <label htmlFor="opcion">Selecciona una opción:</label>
          <select id="opcion" name="opcion" value={datos.opcion} onChange={handleChange}>
            <option value="opcion1">Persona física.</option>
            <option value="opcion2">Persona moral.</option>
          </select>
        </div>
        
        <button type="submit" style={{ marginTop: '15px' }}>
          Enviar Mensaje
        </button>
      </form>
      
      {/* Muestra el mensaje de estado */}
      {mensaje && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{mensaje}</p>}
    </div>
  );
}