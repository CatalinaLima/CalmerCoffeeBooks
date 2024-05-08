import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css';

const Contact = () => {
  const mapRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (!mapRef.current) {
      // Coordenadas de La Barra, Maldonado, Uruguay
      const mapCenter = [-34.91512305982762, -54.86040793579267];
      

      // Configuración del mapa
      const map = L.map('map').setView(mapCenter, 14);

      // Capa de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // Marcador en la ubicación
      L.marker(mapCenter).addTo(map);

      mapRef.current = map; // Actualizamos el ref para indicar que el mapa ya está inicializado
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola.
    console.log(formData);
  };

  return (
    <section className="contact-section">
      <h2 className="title">CONTACTANOS!</h2>
      
      <div className='formulario'>
      <p>Queres realizar un festejo, reservar una mesa, o simplemente comunicarte con nosotros?
        Dejanos tu consulta y nos comunicaremos contigo!
      </p>
        <form className='form2'  onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>

          <button type="submit">SEND</button>
        </form>
      </div>
      <div id="map" className="contact-map"></div>
      {/* <div className="contact-content">
        <p>Ruta 10 y Los silencios, La Barra, Barra De Maldonado, Maldonado, Uruguay 20001</p>
      </div> */}
    </section>
  );
};

export default Contact;



