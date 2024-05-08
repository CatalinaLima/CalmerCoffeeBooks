import "./About.css"


const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="title">INSPIRACION</h2>
        <div className="about-image">
        <img
          src="/assets/location.png"
          alt="Local Image"
        />
      </div>
      <div className="aboutus">
        <p>
        <p className="parrafo">
        Calmer tiene sus raíces en la serena brisa de los cafés australianos y la tranquilidad de la vida en la playa, una inspiración que nació de la experiencia vivida por nuestra familia en esas costas. 
        </p>
        <p className="parrafo">Más que un simple café, es un refugio para amigos, donde cada taza de café es una invitación a la serenidad. Aquí, se anima a los visitantes a sumergirse en la lectura de libros seleccionados cuidadosamente, creando un espacio donde el tiempo se desacelera. 
        </p>
        <p className="parrafo3">Calmer es más que un lugar para disfrutar de una bebida caliente; es un rincón acogedor que celebra la amistad, la tranquilidad y la conexión con la vida costera
        </p>
        </p>
        
        <img className="locationimg" src="/assets/8.jpg" alt="location" />
        </div>

      </div>
      
    </section>
  );
};

export default About;