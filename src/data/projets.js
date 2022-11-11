import tmdebo from "../assets/tmdebo.png"
import vaca from "../assets/vaca.png"
import patitas from "../assets/patitas.png"

const data= [
  {
    title: "LA VACA CHOCHA",
    time: "2 semanas",
    image: vaca,
      description: "Un proyecto de ecommerce grupal. Permite CRUD completo de productos, categorías y usuarios. Implementación de carrito de compras con estados globales, y persistencia de datos utilizando REDUX-PERSIST.",
      linkVideo: "https://www.loom.com/share/54ba105ac99a44d7a63126ef09110b40",
      linkGitHub: "https://github.com/DeboraLedo/la-vaca-chocha",
      stack: "React | Redux | NodeJS | Sequelize | Express"
    },
    {
      title: "PATITAS CON TECHO",
      time: "1 mes",
      image: patitas,
      description: "Proyecto profesional con la empresa CEIBO. App que conecta fundaciones de animales rescatados con adoptantes. CRUD de animales, usuarios y fundaciones. Login con jwt, favoritos, compartir por whatsapp, Chat en vivo.",
      linkVideo: "https://www.loom.com/share/ebb9630dc7134b72b2a3dc2d73e5ae19",
      linkGitHub: "https://github.com/DeboraLedo/Ceibo",
      stack: "React | Redux | Material UI | Mongo DB | Mongoose | Socket IO | Nodemailer | JWT"
    },
    {
      title: "TDEBO",
      time: "1 semana",
      image: tmdebo,
      description: "Proyecto individual de una semana. Desarrollo de una página de películas consumiendo la API  de TMDB. Cuenta con login de usuario, gestión de favoritos y búsqueda de películas/series.",
      linkVideo: "https://www.loom.com/share/1f5df65d35d4433faacae1e0dace3d01",
      linkGitHub: "https://github.com/DeboraLedo/TMDEBO",
      stack: "React | NodeJS | Bulma | Sequelize | Express"
    },
   
  ];
  export default data;