import img1 from "./images/Nueva carpeta/tinified/agricultura.jpg"
import img2 from "./images/Nueva carpeta/tinified/agricultura2.png"
import img3 from "./images/Nueva carpeta/tinified/arado.jpg"
import img4 from "./images/Nueva carpeta/tinified/arado2.jpeg"
import img5 from "./images/Nueva carpeta/tinified/canales.jpg"
import img6 from "./images/Nueva carpeta/tinified/chopper.jpg"
import img7 from "./images/Nueva carpeta/tinified/cosecha.jpg"
import img8 from "./images/Nueva carpeta/tinified/ganaderia.jpeg"
import img9 from "./images/Nueva carpeta/tinified/hachaMano.jpg"
import img11 from "./images/Nueva carpeta/tinified/molino.jpg"
import img10 from "./images/Nueva carpeta/tinified/hoz3.webp"
import img12 from "./images/Nueva carpeta/tinified/puntaPiedra.webp"
import img13 from "./images/Nueva carpeta/tinified/aguja.jpg"
import img14 from "./images/Nueva carpeta/tinified/caza.jpg"
import img15 from "./images/Nueva carpeta/tinified/hachaPulida.jpg"
import img16 from "./images/Nueva carpeta/tinified/pesca.jpg"
import img17 from "./images/Nueva carpeta/tinified/puebloNeo.jpg"
import img18 from "./images/Nueva carpeta/tinified/puebloPaleo.jpg"
import img19 from "./images/Nueva carpeta/tinified/puebloPaleo2.jpg"
import img20 from "./images/Nueva carpeta/tinified/recolección.jpg"
import img21 from "./images/Nueva carpeta/tinified/arpon.jpg"
import img22 from "./images/Nueva carpeta/tinified/ceramica.jpg"

const CONSIGNAS = [{
  id: 1,
  img: img1,
  question: "¿La imagen pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
},
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
  id: 2,
  img: img2,
  question: "¿La imagen pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  question: "¿Esta actividad es del Paleolítico o el Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  id: 5,
  img: img5,
  question: "¿Este paisaje pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
},
{
  id: 5,
  img: img5,
  question: "¿Qué se observa en la imagen?",
  answer: [{
    ans: "Un campamento Paleolítico",
    correct: false
  }, {
    ans: "Un poblado Neolítico",
    correct: true
  }],
  correct: "Un poblado Neolítico"
},
{
  id: 6,
  img: img6,
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: false
  }, {
    ans: "Paleolítico",
    correct: true
  }],
  correct: "Paleolítico"
},
{
  id: 6,
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
  id: 6,
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
  id: 7,
  img: img7,
  question: "¿La imagen pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  question: "¿Esta actividad es del Paleolítico o el Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  id: 9,
  img: img9,
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: false
  }, {
    ans: "Paleolítico",
    correct: true
  }],
  correct: "Paleolítico"
},
{
  id: 9,
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
  id: 9,
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
  id: 10,
  img: img10,
  question: "¿Qué herramienta es?",
  answer: [{
    ans: "Hoz",
    correct: true
  }, {
    ans: "Chopper",
    correct: false
  }, {
    ans: "Hacha de mano",
    correct: false
  }, {
    ans: "Mortero",
    correct: false
  }],
  correct: "Hoz"
},
{
  id: 10,
  img: img10,
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  question: "¿Qué herramienta es?",
  answer: [{
    ans: "Hoz",
    correct: false
  }, {
    ans: "Chopper",
    correct: false
  }, {
    ans: "Hacha de mano",
    correct: false
  }, {
    ans: "Mortero",
    correct: true
  }],
  correct: "Mortero"
},
{
  id: 11,
  img: img11,
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  id: 12,
  img: img12,
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: false
  }, {
    ans: "Paleolítico",
    correct: true
  }],
  correct: "Paleolítico"
},
{
  id: 12,
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
  id: 12,
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
  id: 13,
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
  id: 14,
  img: img14,
  question: "¿Esta actividad es del Paleolítico o el Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: false
  }, {
    ans: "Paleolítico",
    correct: true
  }],
  correct: "Paleolítico"
},
{
  id: 14,
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
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
  id: 16,
  img: img16,
  question: "¿Esta actividad es del Paleolítico o el Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: false,
    correct: false
  }, {
    ans: "Paleolítico",
    correct: true
  }],
  correct: "Paleolítico"
},
{
  id: 16,
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
  id: 17,
  img: img17,
  question: "¿Qué se observa en la imagen?",
  answer: [{
    ans: "Un campamento Paleolítico",
    correct: false
  }, {
    ans: "Un poblado Neolítico",
    correct: true
  }],
  correct: "Un poblado Neolítico"
},
{
  id: 18,
  img: img18,
  question: "¿Qué se observa en la imagen?",
  answer: [{
    ans: "Un campamento Paleolítico",
    correct: true
  }, {
    ans: "Un poblado Neolítico",
    correct: false
  }],
  correct: "Un campamento Paleolítico"
},
{
  id: 19,
  img: img19,
  question: "¿Qué se observa en la imagen?",
  answer: [{
    ans: "Un campamento Paleolítico",
    correct: true
  }, {
    ans: "Un poblado Neolítico",
    correct: false
  }],
  correct: "Un campamento Paleolítico"
},
{
  id: 20,
  img: img20,
  question: "¿Esta actividad es del Paleolítico o el Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: false
  }, {
    ans: "Paleolítico",
    correct: true
  }],
  correct: "Paleolítico"
},
{
  id: 20,
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
  id: 21,
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
  id: 21,
  img: img21,
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: false
  }, {
    ans: "Paleolítico",
    correct: true
  }],
  correct: "Paleolítico"
},
{
  id: 21,
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
  question: "¿La herramienta pertenece al Paleolítico o al Neolítico?",
  answer: [{
    ans: "Neolítico",
    correct: true
  }, {
    ans: "Paleolítico",
    correct: false
  }],
  correct: "Neolítico"
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
}
]

export default CONSIGNAS