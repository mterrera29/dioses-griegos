
import img6 from "./images/Nueva carpeta/tinified/chopper.jpg"
import img9 from "./images/Nueva carpeta/tinified/hachaMano.jpg"
import img12 from "./images/Nueva carpeta/tinified/puntaPiedra.webp"
import img13 from "./images/Nueva carpeta/tinified/aguja.jpg"
import img14 from "./images/Nueva carpeta/tinified/caza.jpg"
import img16 from "./images/Nueva carpeta/tinified/pesca.jpg"
import img18 from "./images/Nueva carpeta/tinified/puebloPaleo.jpg"
import img19 from "./images/Nueva carpeta/tinified/puebloPaleo2.jpg"
import img20 from "./images/Nueva carpeta/tinified/recolección.jpg"
import img21 from "./images/Nueva carpeta/tinified/arpon.jpg"
import img22 from "./images/altamira.jpg"
import img23 from "./images/herramientas.jpg"
import img24 from "./images/tribu.jpg"
export const PALEOLITICO ={
  appTitle:"prehistoric games",
  gameTitle:"La vida en el Paleolítico",
  questionQuantity:[10,15,20],
  consignas:[
    {
      id: 1,
      img: img6,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Faenar animales",
        correct: true
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Cazar animales",
        correct: false
      }, {
        ans: "Moler granos",
        correct: false
      }],
      correct: "Faenar animales"
    },
    {
      id: 2,
      img: img6,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Hacha pulida",
        correct: false
      }, {
        ans: "Chopper",
        correct: true
      }, {
        ans: "Arado",
        correct: false
      }, {
        ans: "Mortero",
        correct: false
      }],
      correct: "Chopper"
    },
    {
      id: 3,
      img: img9,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Faenar animales",
        correct: true
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Cazar animales",
        correct: false
      }, {
        ans: "Moler granos",
        correct: false
      }],
      correct: "Faenar animales"
    },
    {
      id: 4,
      img: img9,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Hacha pulida",
        correct: false
      }, {
        ans: "Chopper",
        correct: false
      }, {
        ans: "Arado",
        correct: false
      }, {
        ans: "Hacha de mano",
        correct: true
      }],
      correct: "Hacha de mano"
    },
    {
      id: 5,
      img: img12,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Faenar animales",
        correct: false
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Cazar animales",
        correct: true
      }, {
        ans: "Moler granos",
        correct: false
      }],
      correct: "Cazar animales"
    },
    {
      id: 6,
      img: img12,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Punta de piedra",
        correct: true
      }, {
        ans: "Chopper",
        correct: false
      }, {
        ans: "Arado",
        correct: false
      }, {
        ans: "Hacha de mano",
        correct: false
      }],
      correct: "Punta de piedra"
    },
    {
      id: 7,
      img: img13,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Punta de piedra",
        correct: false
      }, {
        ans: "Aguja de hueso",
        correct: true
      }, {
        ans: "Arado",
        correct: false
      }, {
        ans: "Hacha de mano",
        correct: false
      }],
      correct: "Aguja de hueso"
    },
    {
      id: 8,
      img: img14,
      question: "¿Qué actividad estan realizando?",
      answer: [{
        ans: "Ganadería",
        correct: false
      }, {
        ans: "Recolección",
        correct: false
      }, {
        ans: "Cazar animales",
        correct: true
      }, {
        ans: "Criar animales",
        correct: false
      }],
      correct: "Cazar animales"
    },
    {
      id: 9,
      img: img16,
      question: "¿Qué actividad está realizando?",
      answer: [{
        ans: "Recolección",
        correct: false
      }, {
        ans: "Pesca",
        correct: true
      }, {
        ans: "Cazar animales",
        correct: false
      }, {
        ans: "Criar animales",
        correct: false
      }],
      correct: "Pesca"
    },
    {
      id: 10,
      img: img18,
      question: "¿Qué son las BANDAS o CLANES?",
      answer: [{
        ans: "Grupos de 10 o 20 personas",
        correct: false
      }, {
        ans: "Grupos de 1000 o 3000 personas",
        correct: false
      }, {
        ans: "Grupos de 30 o 150 personas",
        correct: true
      }, {
        ans: "Grupos de 1500 o 3000 personas",
        correct: false
      }],
      correct: "Grupos de 30 o 150 personas"
    },
    {
      id: 11,
      img: img18,
      question: "¿Donde vivían los seres humanos del Paleolítico?",
      answer: [{
        ans: "En cabañas",
        correct: false
      }, {
        ans: "En campamentos",
        correct: true
      }, {
        ans: "Al aire libre",
        correct: false
      }, {
        ans: "En edificios",
        correct: false
      }],
      correct: "En campamentos"
    },
    {
      id: 12,
      img: img18,
      question: "¿Donde vivían los seres humanos del Paleolítico?",
      answer: [{
        ans: "En cuevas",
        correct: true
      }, {
        ans: "En edificios",
        correct: false
      }, {
        ans: "Al aire libre",
        correct: false
      }, {
        ans: "En cabañas",
        correct: false
      }],
      correct: "En cuevas"
    },
    {///cambiar
      id: 13,
      img: img19,
      question: "¿Que significa ser NÓMADE?",
      answer: [{
        ans: "Vivían trasladandose",
        correct: true
      }, {
        ans: "Vivían en un mismo lugar",
        correct: false
      }],
      correct: "Vivían trasladandose"
    },
    {///cambiar
      id: 14,
      img: img19,
      question: "¿Por qué en el Paleolítico vivían trasladandose?",
      answer: [{
        ans: "Por el mal clima",
        correct: false
      }, {
        ans: "Porque se agotaban los alimentos",
        correct: true
      }],
      correct: "Porque se agotaban los alimentos"
    },
    {
      id: 15,
      img: img20,
      question: "¿Qué actividad está realizando?",
      answer: [{
        ans: "Sembrar",
        correct: false
      }, {
        ans: "Recolección",
        correct: true
      }, {
        ans: "Cazar animales",
        correct: false
      }, {
        ans: "Cosechar",
        correct: false
      }],
      correct: "Recolección"
    },
    {
      id: 16,
      img: img21,
      question: "¿Qué herramienta es?",
      answer: [{
        ans: "Hacha pulida",
        correct: false
      }, {
        ans: "Chopper",
        correct: false
      }, {
        ans: "Arado",
        correct: false
      }, {
        ans: "Arpón de hueso",
        correct: true
      }],
      correct: "Arpón de hueso"
    },
    {
      id: 17,
      img: img21,
      question: "¿Para qué se utilizaba esta herramienta?",
      answer: [{
        ans: "Limpiar el terreno",
        correct: false
      }, {
        ans: "Abrir surcos para sembrar",
        correct: false
      }, {
        ans: "Cazar",
        correct: false
      }, {
        ans: "Pescar",
        correct: true
      }],
      correct: "Pescar"
    },
    {
      id: 18,
      img: img22,
      question: "¿Cómo se llama el arte en las cuevas del Paleolítico?",
      answer: [{
        ans: "Arte prehistórico",
        correct: false
      }, {
        ans: "Impresionismo",
        correct: false
      }, {
        ans: "Arte rupestre",
        correct: true
      }, {
        ans: "Arte cavernícola",
        correct: false
      }],
      correct: "Arte rupestre"
    },
    {
      id: 19,
      img: img23,
      question: "¿Cómo se fabricaban herramientas durante el Paleolítico?",
      answer: [{
        ans: "Puliendo piedras",
        correct: false
      }, {
        ans: "Golpeando piedras",
        correct: true
      }, {
        ans: "Fundiendo metales",
        correct: false
      }, {
        ans: "Raspando piedras",
        correct: false
      }],
      correct: "Golpeando piedras"
    },
    {
      id: 20,
      img: img24,
      question: "Los seres humanos del Paleolítico...",
      answer: [{
        ans: "eran productores",
        correct: false
      }, {
        ans: "eran depredadores.",
        correct: true
      }],
      correct: "eran depredadores."
    },
    {
      id: 21,
      img: img20,
      question: "Los seres humanos del Paleolítico..",
      answer: [{
        ans: "sembraban y cosechaban alimentos.",
        correct: false
      }, {
        ans: "recolectaban frutos silvestres.",
        correct: true
      }],
      correct: "recolectaban frutos silvestres."
    },
  ]
}

