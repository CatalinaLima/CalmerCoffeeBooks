const products = [
  {
    id: 1,
    title: "El Gran Gatsby",
    price: 15.99,
    description: "Una novela clásica que retrata la decadencia de la sociedad en la década de 1920.",
    category: "ficcion",
    stock: 20,
    image: "/assets/greatgatsby.jpg",
    discount: 0
  },
  {
    id: 2,
    title: "Cien años de soledad",
    price: 19.99,
    description: "Una obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía.",
    category: "ficcion",
    stock: 15,
    image: "/assets/100.png",
    discount: 0
  },
  {
    id: 3,
    title: "1984",
    price: 12.99,
    description: "Una distopía clásica que presenta un futuro totalitario y vigilado.",
    category: "cienciaficcion",
    stock: 18,
    image: "/assets/1984.jpg",
    discount: 0
  },
  {
    id: 4,
    title: "Orgullo y prejuicio",
    price: 14.99,
    description: "Una novela romántica que critica la sociedad y las normas sociales del siglo XIX.",
    category: "romance",
    stock: 25,
    image: "/assets/oyp.png",
    discount: 0
  },
  {
    id: 5,
    title: "Matar a un ruiseñor",
    price: 16.99,
    description: "Un clásico de la literatura que aborda temas de raza y justicia en el sur de Estados Unidos.",
    category: "drama",
    stock: 12,
    image: "/assets/matar.jpg",
    discount: 0
  },
  {
    id: 6,
    title: "Los juegos del hambre",
    price: 18.99,
    description: "Una serie de novelas distópicas que sigue la historia de Katniss Everdeen en un futuro postapocalíptico.",
    category: "cienciaficcion",
    stock: 10,
    image: "/assets/juegos.jpg",
    discount: 0
  },
  {
    id: 7,
    title: "Don Quijote de la Mancha",
    price: 22.99,
    description: "Una obra cumbre de la literatura española que narra las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.",
    category: "clasico",
    stock: 8,
    image: "/assets/don.jpg",
    discount: 0
  },
  {
    id: 8,
    title: "Harry Potter y la piedra filosofal",
    price: 16.99,
    description: "El inicio de la famosa serie que sigue las aventuras del joven mago Harry Potter en la escuela de magia Hogwarts.",
    category: "fantasia",
    stock: 15,
    image: "/assets/harry.jpg",
    discount: 0
  },
  {
    id: 9,
    title: "Crónica de una muerte anunciada",
    price: 13.99,
    description: "Una novela que relata los eventos que conducen a la muerte anunciada de Santiago Nasar.",
    category: "drama",
    stock: 20,
    image: "/assets/cronica.jpg",
    discount: 0
  },
  {
    id: 10,
    title: "Sapiens: De animales a dioses",
    price: 20.99,
    description: "Una exploración fascinante de la historia de la humanidad desde sus primeros días hasta la actualidad.",
    category: "historia",
    stock: 14,
    image: "/assets/sapiens.jpg",
    discount: 0
  },
  {
    id: 11,
    title: "El señor de los anillos: La comunidad del anillo",
    price: 25.99,
    description: "La primera parte de la épica trilogía que sigue la búsqueda del Anillo Único y la lucha contra las fuerzas del mal en la Tierra Media.",
    category: "fantasia",
    stock: 18,
    image: "/assets/senor.jpg",
    discount: 0
  },
  {
    id: 12,
    title: "Crimen y castigo",
    price: 17.99,
    description: "Una novela clásica de Fiódor Dostoyevski que explora las complejidades morales y psicológicas de un estudiante que comete un asesinato.",
    category: "drama",
    stock: 12,
    image: "/assets/crimen.jpg",
    discount: 0
  },
  {
    id: 13,
    title: "El Hobbit",
    price: 19.99,
    description: "Una novela de fantasía de J.R.R. Tolkien que sigue las aventuras del hobbit Bilbo Bolsón en su viaje para recuperar un tesoro guardado por el dragón Smaug.",
    category: "fantasia",
    stock: 15,
    image: "/assets/hobbit.jpg",
    discount: 0
  },
  {
    id: 14,
    title: "Anna Karenina",
    price: 21.99,
    description: "Una obra maestra de León Tolstói que explora la vida de Anna Karenina y sus complicadas relaciones amorosas en la alta sociedad rusa.",
    category: "clásico",
    stock: 10,
    image: "/assets/anna.jpg",
    discount: 0
  },
  {
    id: 15,
    title: "El Alquimista",
    price: 14.99,
    description: "Una novela de Paulo Coelho que sigue la búsqueda espiritual de Santiago en su viaje por el desierto.",
    category: "espiritualidad",
    stock: 20,
    image: "/assets/alquimista.jpg",
    discount: 0
  },
  {
    id: 16,
    title: "El retrato de Dorian Gray",
    price: 16.99,
    description: "Una novela de Oscar Wilde que examina la corrupción moral a través del retrato envejeciente de Dorian Gray.",
    category: "clásico",
    stock: 14,
    image: "/assets/dorian.jpg",
    discount: 0
  },
  {
    id: 17,
    title: "El nombre del viento",
    price: 23.99,
    description: "La primera entrega de la serie 'Crónica del asesino de reyes' de Patrick Rothfuss, que narra la historia de Kvothe.",
    category: "fantasia",
    stock: 8,
    image: "/assets/viento.jpg",
    discount: 0
  },
  {
    id: 18,
    title: "Mujer en punto cero",
    price: 18.99,
    description: "Una novela de Nawal El Saadawi que aborda temas de opresión y resistencia a través de la historia de una prisionera condenada a muerte.",
    category: "ficcion",
    stock: 11,
    image: "/assets/mujer.jpg",
    discount: 0
  },
  {
    id: 19,
    title: "Las uvas de la ira",
    price: 20.99,
    description: "Una novela de John Steinbeck que sigue la odisea de la familia Joad durante la Gran Depresión en Estados Unidos.",
    category: "drama",
    stock: 16,
    image: "/assets/uvas.jpg",
    discount: 0
  },
  {
    id: 20,
    title: "El silencio de los corderos",
    price: 22.99,
    description: "Un thriller psicológico de Thomas Harris que sigue la búsqueda del agente del FBI Clarice Starling para atrapar a un asesino en serie.",
    category: "drama",
    stock: 9,
    image: "/assets/silence.jpg",
    discount: 0
  },
  {
    id: 21,
    title: "Pacific Natural at Home",
    price: 22.99,
    description: "Jenni Kayne, the creator of the laid-back, luxe California lifestyle brand, shows us how to create spaces that encourage living well in comfort and style by featuring beautiful and inspiring interiors along with practical room-by-room tips",
    category: "home",
    stock: 4,
    image: "/assets/home.jpg",
    discount: 0
  },
  {
    id: 22,
    title: "Organized Living",
    price: 25.00,
    description: "Kickstart your organized life with this inspiring visual guide from the author of Minimalista",
    category: "home",
    stock: 2,
    image: "/assets/live.jpg",
    discount: 0
  },
  {
    id: 23,
    title: "Plant-Based Delicious",
    price: 27.55,
    description: "Why not have uber delicious and super healthy? Certified holistic nutritionist, licensed pharmacist and passionate plant-based chef Ashley Madden is here to prove that tasty family favorites belong on your table?with a vegan twist! ",
    category: "home",
    stock: 2,
    image: "/assets/cook.jpg",
    discount: 0
  },
  {
    id: 24,
    title: "Surf Shack",
    price: 21.89,
    description: "Peek inside the homes of longtime enthusiasts and dedicated newcomers that reflect not just a sport or passion, but also a way of life. ",
    category: "home",
    stock: 4,
    image: "/assets/surf.jpg",
    discount: 0
  },
  

]

const productsUpperCase = products.map(product => ({
  ...product,
  title: product.title.toUpperCase()
}));

  export default productsUpperCase 