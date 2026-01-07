import { useState, useEffect } from 'react';
import axios from 'axios';

// Se lee la variable de entorno, que será diferente en desarrollo (local) y producción (Netlify)
const URL_API = import.meta.env.VITE_DJANGO_URL; 

export default function Posts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Asegúrate de que la ruta API coincida con la de Django: /api/posts/
    axios.get(`${URL_API}/api/posts/`) 
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar datos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando posts...</div>;

  return (
    <div>
      <h2>Posts de Django</h2>
      <ul>
        {items.map(item => (
          // Asume que cada post tiene un 'id' y un 'titulo'
          <li key={item.id}>{item.titulo}</li> 
        ))}
      </ul>
    </div>
  );
}