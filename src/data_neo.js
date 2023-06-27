import img1 from "./images/Nueva carpeta/tinified/agricultura.jpg"
import img2 from "./images/Nueva carpeta/tinified/agricultura2.png"
import img3 from "./images/Nueva carpeta/tinified/arado.jpg"
import img4 from "./images/Nueva carpeta/tinified/arado2.jpeg"
import img5 from "./images/Nueva carpeta/tinified/canales.jpg"
import img7 from "./images/Nueva carpeta/tinified/cosecha.jpg"
import img8 from "./images/Nueva carpeta/tinified/ganaderia.jpeg"
import img11 from "./images/Nueva carpeta/tinified/molino.jpg"
import img10 from "./images/Nueva carpeta/tinified/hoz3.webp"
import img15 from "./images/Nueva carpeta/tinified/hachaPulida.jpg"
import img17 from "./images/Nueva carpeta/tinified/puebloNeo.jpg"
import img22 from "./images/Nueva carpeta/tinified/ceramica.jpg"
import img23 from "./images/aldeas.jpg"

export const NEOLITICO ={
  appTitle:"prehistoric games",
  gameTitle:"La vida en el Neolítico",
  questionQuantity:[10,15,20],
  consignas:[
    {
      id: 1,
      img: img1,
      question: "¿Qué están haciendo en la imagen?",
      answer: [{
        ans: "Recolección",
        correct: false
      }, {
        ans: "Cazando",
        correct: false
      }, {
        ans: "Cosechando",
        correct: true
      }, {
        ans: "Limpiando el terreno",
        correct: false
      }],
      correct: "Cosechando"
    },
    {
      id: 2,
      img: img2,
      question: "¿Qué están haciendo en la imagen?",
      answer: [{
        ans: "Cosechando",
        correct: true
      }, {
        ans: "Cazando",
        correct: false
      }, {
        ans: "Recolección",
        correct: false
      }, {
        ans: "Creando herramientas",
        correct: false
      }],
      correct: "Cosechando"
    },
    {
      id: 3,
      img: img3,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Hacha pulida",
        correct: false
      }, {
        ans: "Chopper",
        correct: false
      }, {
        ans: "Arado",
        correct: true
      }, {
        ans: "Mortero",
        correct: false
      }],
      correct: "Arado"
    },
    {
      id: 3,
      img: img3,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: false
      }, {
        ans: "Abrir surcos para sembrar",
        correct: true
      }, {
        ans: "Cazar",
        correct: false
      }, {
        ans: "Moler granos",
        correct: false
      }],
      correct: "Abrir surcos para sembrar"
    },
    {
      id: 4,
      img: img4,
      question: "¿Qué herramienta está utilizando?",
      answer: [{
        ans: "Hacha pulida",
        correct: false
      }, {
        ans: "Chopper",
        correct: false
      }, {
        ans: "Arado",
        correct: true
      }, {
        ans: "Mortero",
        correct: false
      }],
      correct: "Arado"
    },
    {
      id: 4,
      img: img4,
      question: "¿Qué actividad está realizando?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: false
      }, {
        ans: "Abrir surcos para sembrar",
        correct: true
      }, {
        ans: "Cazar",
        correct: false
      }, {
        ans: "Moler granos",
        correct: false
      }],
      correct: "Abrir surcos para sembrar"
    },
    {
      id: 7,
      img: img7,
      question: "¿Qué están haciendo en la imagen?",
      answer: [{
        ans: "Recolectando alimentos",
        correct: false
      }, {
        ans: "Cazando",
        correct: false
      }, {
        ans: "Cosechando",
        correct: true
      }, {
        ans: "Limpiando el terreno",
        correct: false
      }],
      correct: "Cosechando"
    },
    {
      id: 8,
      img: img8,
      question: "¿Qué actividad está realizando?",
      answer: [{
        ans: "Recolección",
        correct: false
      }, {
        ans: "Ganadería",
        correct: true
      }, {
        ans: "Cazar animales",
        correct: false
      }, {
        ans: "Moler granos",
        correct: false
      }],
      correct: "Ganadería"
    },
    {
      id: 10,
      img: img10,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: false
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Cazar animales",
        correct: false
      }, {
        ans: "Cosechar",
        correct: true
      }],
      correct: "Cosechar"
    },
    {
      id: 11,
      img: img11,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: false
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Cazar animales",
        correct: false
      }, {
        ans: "Moler granos",
        correct: true
      }],
      correct: "Moler granos"
    },
    {
      id: 15,
      img: img15,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Hacha pulida",
        correct: true
      }, {
        ans: "Chopper",
        correct: false
      }, {
        ans: "Arado",
        correct: false
      }, {
        ans: "Mortero",
        correct: false
      }],
      correct: "Hacha pulida"
    },
    {
      id: 15,
      img: img15,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: true
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Cazar",
        correct: false
      }, {
        ans: "Moler granos",
        correct: false
      }],
      correct: "Limpiar el terreno"
    },
    {
      id: 22,
      img: img22,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Hacha pulida",
        correct: false
      }, {
        ans: "Chopper",
        correct: false
      }, {
        ans: "Cerámica",
        correct: true
      }, {
        ans: "Arpón de hueso",
        correct: false
      }],
      correct: "Cerámica"
    },
    {
      id: 22,
      img: img22,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: false
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Almacenar granos",
        correct: true
      }, {
        ans: "Pescar",
        correct: false
      }],
      correct: "Almacenar granos"
    },
    {
      id: 22,
      img: img22,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: false
      }, {
        ans: "Almacenar agua",
        correct: true
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Pescar",
        correct: false
      }],
      correct: "Almacenar agua"
    },
    {
      id: 20,
      img: img17,
      question: "Los seres humanos del Neolítico...",
      answer: [{
        ans: "eran productores.",
        correct: true
      }, {
        ans: "eran depredadores.",
        correct: false
      }],
      correct: "eran productores."
    },
    {
      id: 21,
      img: img17,
      question: "Los seres humanos del Neolítico..",
      answer: [{
        ans: "sembraban y cosechaban alimentos.",
        correct: true
      }, {
        ans: "recolectaban frutos silvestres.",
        correct: false
      }],
      correct: "sembraban y cosechaban alimentos."
    },
    {
      id: 19,
      img: img15,
      question: "¿Cómo se fabricaban herramientas durante el Neolítico?",
      answer: [{
        ans: "Puliendo piedras",
        correct: true
      }, {
        ans: "Golpeando piedras",
        correct: false
      }, {
        ans: "Fundiendo metales",
        correct: false
      }, {
        ans: "Raspando piedras",
        correct: false
      }],
      correct: "Puliendo piedras"
    },
    {
      id: 14,
      img: img17,
      question: "¿Por qué en el Neolítico vivían en un solo lugar?",
      answer: [{
        ans: "Para protegerse",
        correct: false
      }, {
        ans: "Para cuidar los cultivos",
        correct: true
      }],
      correct: "Para cuidar los cultivos"
    },
    {
      id: 13,
      img: img1,
      question: "¿Que significa ser SEDENTARIO?",
      answer: [{
        ans: "Vivían trasladandose",
        correct: false
      }, {
        ans: "Vivían en un mismo lugar",
        correct: true
      }],
      correct: "Vivían en un mismo lugar"
    },
    {
      id: 12,
      img: img23,
      question: "¿Donde vivían los seres humanos del Neolítico?",
      answer: [{
        ans: "En cuevas",
        correct: false
      }, {
        ans: "En edificios",
        correct: false
      }, {
        ans: "Al aire libre",
        correct: false
      }, {
        ans: "En aldeas",
        correct: true
      }],
      correct: "En aldeas"
    },
    {
      id: 21,
      img: img2,
      question: "En que orden se realizan los PASOS de la AGRICULTURA",
      answer: [{
        ans: "Arar y sembrar, Cosechar, Moler y Limpiar",
        correct: false
      }, {
        ans: "Limpiar, Arar y sembrar, Cosechar, Moler",
        correct: true
      }],
      correct: "Limpiar, Arar y sembrar, Cosechar, Moler"
    },
    
    {
      id: 21,
      img: img2,
      question: "¿Como obtenían alimentos en el Neolítico?",
      answer: [{
        ans: "Caza, pesca y recolección",
        correct: false
      }, {
        ans: "Agricultura y Ganadería",
        correct: true
      }],
      correct: "Agricultura y Ganadería"
    },
  ]
}