import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 



const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="footer-content">
        <div className="footer-section1">
            <div className='logoname'>
            <img className='logofooter' src="/assets/calmer.png" alt="calmerlogo" />
            <h1>CALMER</h1>
            </div>
            {/* <div>
            <p>A SIMPLE LIFE</p>
            </div> */}
          </div>
          <div className="footer-section">
            <h2 className='t'>Contacto</h2>
            <p>Ruta 10 y Los silencios, La Barra </p>
            <p>calmerstore@gmail.com</p>
          </div>
          <div className="footer-section">
            <h2>Enlaces</h2>
            <ul >
              <li><a className='link' href="/">Inicio</a></li>
              <li><a className='link' href="/books">Libros</a></li>
              <li><a className='link' href="/menu">Menú</a></li>
              <li><a className='link' href="/about">Nosotros</a></li>
              <li><a className='link' href="/contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Seguinos</h2>
            <div className="social-icons">
            <a href="https://wa.me/15879714981" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://facebook.com/calmer" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com/calmercoffee" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CALMER BOOKS & COFFEE. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;











// const Footer = () => {
//     return (
//     <footer className='footer'>
//         <div className="social-icons">
//             <a href="https://wa.me/15879714981" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faWhatsapp} size="2x" />
//             </a>
//             <a href="https://facebook.com/calmer" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//             </a>
//             <a href="https://instagram.com/calmercoffee" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//             </a>
//         </div>
//         <p>&copy; 2024 Calmer Books & Coffee. All rights reserved.</p>
//     </footer>
//     );
// };

// export default Footer;

