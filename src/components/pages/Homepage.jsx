import { useState, useEffect } from 'react';
import { getData } from '../../services/firebase';
import Loader from '../Loader/Loader';
import Slider from 'react-slick';
import './HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


function Homepage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((respuesta) => {
        // Obtener los últimos 4 elementos
        const ultimos4Productos = respuesta.slice(-4);
        setProducts(ultimos4Productos);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };


  return (
    <div>
      <div className='header'>
        <img className="encabezado" src="/assets/encabezado4.png" alt="Encabezado" />
      </div>
      <section className="section1">
        <div className='info'>
        <p className='ts1'>CALMER: BOOKS & COFFEE</p>
        <p className='ts11'>SOMOS UN ESPACIO DE PENSAR, CONECTAR Y DESCUBRIR.
        <p>SOMOS CALMER.</p>
        </p>
        </div>
        <div className='images1'>
          <img className='foto1' src="assets/1.jpg" alt="calmer" />
          <img className='foto2' src="assets/2.jpg" alt="calmer" />
        </div>
      </section>
      <section className="section3">
        <img className='fotoprueba1' src="assets/prueba1.jpg" alt="calmer" />
        <div className='s3'>
          <p className='ts2'>NUESTRO CAFE</p>
          <p className='coffee'>Ya sea que seas un conocedor del café o estés explorando el mundo del café de especialidad por primera vez, te invitamos a unirte a nosotros en esta emocionante travesía. Descubre la diferencia que hace un café cuidadosamente seleccionado y preparado con pasión. ¡Bienvenido a la revolución del café de especialidad!
          </p>
          <button className='button'>
            <Link className='link' to= '/menu'>VER MENU</Link>
          </button>
        </div>
      </section>
      <section className="section2">
      <div className='s2'>
          <p className='ts2'>NUESTROS FAVORITOS!</p>
          <p className='libros'>Desde clásicos atemporales hasta las últimas novedades, nuestra colección está diseñada para satisfacer todos los gustos. Descubre historias cautivadoras, aventuras emocionantes, y conocimientos que despiertan la curiosidad. Navega a través de categorías que incluyen ficción, no ficción, ciencia ficción, romance, misterio y más.
          </p>
          <button className='button'>
          <Link className='link' to= '/books'>VER TODOS</Link>
          </button>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="carousel-item-product">
              <Link to={`/product/${product.id}`}>
              <img src={product.image} className="d-blockw-100" alt={product.title} />
              </Link>
            </div>
          ))}
        </Slider>
      </section>
      <section className='section4'>
        <div className='s4'>
          <h1 className='s4title'>Simplicity  is the ultimate sophisticacion</h1>
          <p className='p4'>- Leonardo Da Vinci -</p>
        </div>
      </section>
      <div className='conocernos'>
  <div className='texto-conocernos'>
    <p className='ts5'>
    <Link className='link' to= '/contact'>VENI A CONOCERNOS!</Link>
    </p>
  </div>
  <section className="section5">
    <div className='images2'>
      <img className='foto7' src="assets/7.jpg" alt="calmer" />
      <img className='foto3' src="assets/3.jpg" alt="calmer" />
      <img className='foto4' src="assets/4.jpg" alt="calmer" />
    </div>
    <div className='images3'>
      <img className='foto5' src="assets/5.jpg" alt="calmer" />
      <img className='foto6' src="assets/6.jpg" alt="calmer" />
    </div>
  </section>
</div>

    </div>
  );
}

export default Homepage;