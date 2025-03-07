import zeus from './images/Nueva carpeta/tinified/zeus.jpg';
import poseidon from './images/Nueva carpeta/tinified/poseidon.jpg';
import hera from './images/Nueva carpeta/tinified/hera.jpg';
import ares from './images/Nueva carpeta/tinified/ares.webp';
import atenea from './images/Nueva carpeta/tinified/atenea.webp';
import afrodita from './images/Nueva carpeta/tinified/afrodita.jpg';
import apolo from './images/Nueva carpeta/tinified/apolo.webp';
import artemisa from './images/Nueva carpeta/tinified/artemisa.webp';
import hermes from './images/Nueva carpeta/tinified/hermes.jpg';
import hefesto from './images/Nueva carpeta/tinified/hefesto.jpg';
import demeter from './images/Nueva carpeta/tinified/demeter.webp';
import dionisio from './images/Nueva carpeta/tinified/dionisio.jpg';
import hades from './images/Nueva carpeta/tinified/hades.jpg';

export const GRIEGOS = {
  appTitle: 'Los dioses griegos',
  gameTitle: 'Los dioses griegos',
  questionQuantity: [15],
  consignas: [
    {
      id: 1,
      img: zeus,
      question: 'Zeus era el dios de:',
      answer: [
        { ans: 'El cielo', correct: true },
        { ans: 'El mar', correct: false },
        { ans: 'La guerra', correct: false },
        { ans: 'El inframundo', correct: false },
      ],
      correct: 'El cielo',
    },
    {
      id: 2,
      img: zeus,
      question: 'El arma principal de Zeus era:',
      answer: [
        { ans: 'Un rayo', correct: true },
        { ans: 'Un tridente', correct: false },
        { ans: 'Un arco', correct: false },
        { ans: 'Una lanza', correct: false },
      ],
      correct: 'Un rayo',
    },
    {
      id: 3,
      img: poseidon,
      question: 'Poseidón era el dios de:',
      answer: [
        { ans: 'El mar', correct: true },
        { ans: 'El sol', correct: false },
        { ans: 'La tierra', correct: false },
        { ans: 'El fuego', correct: false },
      ],
      correct: 'El mar',
    },
    {
      id: 4,
      img: poseidon,
      question: 'El símbolo de Poseidón era:',
      answer: [
        { ans: 'El tridente', correct: true },
        { ans: 'El rayo', correct: false },
        { ans: 'El arco', correct: false },
        { ans: 'La antorcha', correct: false },
      ],
      correct: 'El tridente',
    },
    {
      id: 5,
      img: hera,
      question: 'Hera era la diosa de:',
      answer: [
        { ans: 'El matrimonio', correct: true },
        { ans: 'La guerra', correct: false },
        { ans: 'El comercio', correct: false },
        { ans: 'La caza', correct: false },
      ],
      correct: 'El matrimonio',
    },
    {
      id: 6,
      img: hera,
      question: 'Hera estaba casada con:',
      answer: [
        { ans: 'Zeus', correct: true },
        { ans: 'Hades', correct: false },
        { ans: 'Poseidón', correct: false },
        { ans: 'Ares', correct: false },
      ],
      correct: 'Zeus',
    },
    {
      id: 7,
      img: ares,
      question: 'Ares era el dios de:',
      answer: [
        { ans: 'La guerra', correct: true },
        { ans: 'El amor', correct: false },
        { ans: 'La música', correct: false },
        { ans: 'El comercio', correct: false },
      ],
      correct: 'La guerra',
    },
    {
      id: 8,
      img: ares,
      question: 'Ares era hijo de:',
      answer: [
        { ans: 'Zeus y Hera', correct: true },
        { ans: 'Poseidón y Deméter', correct: false },
        { ans: 'Hermes y Afrodita', correct: false },
        { ans: 'Apolo y Artemisa', correct: false },
      ],
      correct: 'Zeus y Hera',
    },
    {
      id: 9,
      img: atenea,
      question: 'Atenea era la diosa de:',
      answer: [
        { ans: 'La sabiduría', correct: true },
        { ans: 'El amor', correct: false },
        { ans: 'La caza', correct: false },
        { ans: 'La agricultura', correct: false },
      ],
      correct: 'La sabiduría',
    },
    {
      id: 10,
      img: atenea,
      question: 'Atenea nació de:',
      answer: [
        { ans: 'La cabeza de Zeus', correct: true },
        { ans: 'El mar', correct: false },
        { ans: 'El monte Olimpo', correct: false },
        { ans: 'Un rayo', correct: false },
      ],
      correct: 'La cabeza de Zeus',
    },
    {
      id: 11,
      img: afrodita,
      question: 'Afrodita era la diosa de:',
      answer: [
        { ans: 'El amor', correct: true },
        { ans: 'La guerra', correct: false },
        { ans: 'La música', correct: false },
        { ans: 'La caza', correct: false },
      ],
      correct: 'El amor',
    },
    {
      id: 12,
      img: afrodita,
      question: 'Afrodita nació de:',
      answer: [
        { ans: 'La espuma del mar', correct: true },
        { ans: 'El monte Olimpo', correct: false },
        { ans: 'Un rayo de Zeus', correct: false },
        { ans: 'La tierra', correct: false },
      ],
      correct: 'La espuma del mar',
    },
    {
      id: 13,
      img: apolo,
      question: 'Apolo era el dios de:',
      answer: [
        { ans: 'La música y el sol', correct: true },
        { ans: 'La guerra', correct: false },
        { ans: 'El inframundo', correct: false },
        { ans: 'El mar', correct: false },
      ],
      correct: 'La música y el sol',
    },
    {
      id: 14,
      img: apolo,
      question: 'El instrumento asociado a Apolo es:',
      answer: [
        { ans: 'La lira', correct: true },
        { ans: 'El tridente', correct: false },
        { ans: 'El arco', correct: false },
        { ans: 'El rayo', correct: false },
      ],
      correct: 'La lira',
    },
    {
      id: 15,
      img: artemisa,
      question: 'Artemisa era la diosa de:',
      answer: [
        { ans: 'La caza', correct: true },
        { ans: 'El amor', correct: false },
        { ans: 'La música', correct: false },
        { ans: 'El fuego', correct: false },
      ],
      correct: 'La caza',
    },
    {
      id: 16,
      img: artemisa,
      question: 'Artemisa era hermana gemela de:',
      answer: [
        { ans: 'Apolo', correct: true },
        { ans: 'Ares', correct: false },
        { ans: 'Hermes', correct: false },
        { ans: 'Atenea', correct: false },
      ],
      correct: 'Apolo',
    },
    {
      id: 17,
      img: hermes,
      question: 'Hermes era el dios de:',
      answer: [
        { ans: 'Los mensajeros y los viajeros', correct: true },
        { ans: 'La guerra', correct: false },
        { ans: 'El mar', correct: false },
        { ans: 'El inframundo', correct: false },
      ],
      correct: 'Los mensajeros y los viajeros',
    },
    {
      id: 18,
      img: hermes,
      question: 'El símbolo de Hermes es:',
      answer: [
        { ans: 'El caduceo', correct: true },
        { ans: 'El tridente', correct: false },
        { ans: 'El rayo', correct: false },
        { ans: 'La lira', correct: false },
      ],
      correct: 'El caduceo',
    },
    {
      id: 19,
      img: hefesto,
      question: 'Hefesto era el dios de:',
      answer: [
        { ans: 'El fuego y la forja', correct: true },
        { ans: 'La guerra', correct: false },
        { ans: 'El mar', correct: false },
        { ans: 'La música', correct: false },
      ],
      correct: 'El fuego y la forja',
    },
    {
      id: 21,
      img: demeter,
      question: 'Deméter era la diosa de:',
      answer: [
        { ans: 'La agricultura', correct: true },
        { ans: 'El amor', correct: false },
        { ans: 'La guerra', correct: false },
        { ans: 'El mar', correct: false },
      ],
      correct: 'La agricultura',
    },
    {
      id: 22,
      img: demeter,
      question: 'Deméter era madre de:',
      answer: [
        { ans: 'Perséfone', correct: true },
        { ans: 'Atenea', correct: false },
        { ans: 'Apolo', correct: false },
        { ans: 'Artemisa', correct: false },
      ],
      correct: 'Perséfone',
    },
    {
      id: 23,
      img: dionisio,
      question: 'Dionisio era el dios de:',
      answer: [
        { ans: 'El vino y la fiesta', correct: true },
        { ans: 'La guerra', correct: false },
        { ans: 'El mar', correct: false },
        { ans: 'La música', correct: false },
      ],
      correct: 'El vino y la fiesta',
    },
    {
      id: 24,
      img: dionisio,
      question: 'Dionisio era hijo de:',
      answer: [
        { ans: 'Zeus', correct: true },
        { ans: 'Poseidón', correct: false },
        { ans: 'Hades', correct: false },
        { ans: 'Ares', correct: false },
      ],
      correct: 'Zeus',
    },
    {
      id: 25,
      img: hades,
      question: 'Hades era el dios de:',
      answer: [
        { ans: 'El inframundo', correct: true },
        { ans: 'El mar', correct: false },
        { ans: 'El cielo', correct: false },
        { ans: 'La guerra', correct: false },
      ],
      correct: 'El inframundo',
    },
  ],
};
