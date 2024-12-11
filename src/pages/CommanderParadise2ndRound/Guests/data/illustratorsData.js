import {
    joshuaCairosProfilePhoto,
    franGarcesProfilePhoto,
    martinDeDiegoProfilePhoto,
} from "../../../../assets/images";
import {
    franGarces1,
    franGarces2,
    franGarces3,
    franGarces4,
    franGarces5,
    franGarces6,
    franGarces7,
    franGarces8,
    franGarces9,
    franGarces10,
    franGarces11,
    franGarces12,
    franGarces13,
    franGarces14,
    franGarces15,
    franGarces16,
    joshuaCairos1,
    joshuaCairos2,
    joshuaCairos3,
    joshuaCairos4,
    joshuaCairos5,
    joshuaCairos6,
    joshuaCairos7,
    joshuaCairos8,
    joshuaCairos9,
    joshuaCairos10,
    martinDeDiego1,
    martinDeDiego2,
    martinDeDiego3,
    martinDeDiego4,
    martinDeDiego5,
    martinDeDiego6,
    martinDeDiego7,
    martinDeDiego8,
    martinDeDiego9,
    martinDeDiego10,
} from "./images";
const streamersData = [
    {
        id: "frangarces",
        name: "Fran Garcés - Dibujante Nocturno",
        image: franGarcesProfilePhoto,
        position: { color: "success", label: "Fran Garces" },
        description: `Fran Garcés, Dibujante nocturno es un artista Tinerfeño nacido en el 86.
Trabaja para empresas como Magic of the gathering y ha publicado con editoriales como 3DTotal, Ominiky ediciones o Grupo Anaya entre otras. También es profesor en Doméstika.
Su estilo esta centrado en la fantasía épica y oscura. Siempre le ha gustado dibujar todo tipo de criaturas desde la imaginación,
inspirándose en la naturaleza y las formas orgánicas. Sus preferencias a la hora de dibujar tradicionalmente son siempre la tinta y el bolígrafo, su pasión es la practica diaria en el Sketchbook.`,
        images: [
            franGarces1,
            franGarces2,
            franGarces3,
            franGarces4,
            franGarces5,
            franGarces6,
            franGarces7,
            franGarces8,
            franGarces9,
            franGarces10,
            franGarces11,
            franGarces12,
            franGarces13,
            franGarces14,
            franGarces15,
            franGarces16,
        ],
        links: [
            {
                platform: "Web",
                url: "https://www.dibujantenocturno.com",
            },
            {
                platform: "ArtStation",
                url: "https://www.artstation.com/dibujantenocturno",
            },
            {
                platform: "Instagram",
                url: "https://www.instagram.com/dibujantenocturno/",
            },
            {
                platform: "Scryfall",
                url: "https://scryfall.com/search?q=a:%22Dibujante+Nocturno%22",
            },
        ],
    },
    {
        id: "joshuacairos",
        name: "Joshua Cairos",
        image: joshuaCairosProfilePhoto,
        position: { color: "success", label: "Joshua Cairos" },
        description: `Joshua Cairós es un ilustrador y artista conceptual español, un profesional independiente que trabaja tanto en medios tradicionales como digitales. Desde 2012, se ha enfocado en mejorar el realismo y desarrollar escenas de fantasía.
Ha trabajado como artista conceptual para Disney, Legendary Entertainment y Netflix, y como ilustrador profesional para franquicias como Magic: The Gathering, Juego de Tronos, Star Wars y El Señor de los Anillos. El cortometraje en el que trabajó como director de arte, "Madrid 2120", ganó el Premio Goya en 2019 (los principales premios anuales de cine en España). Su trabajo ha sido presentado en libros y revistas, siendo "The Rise of the Dragon" de George R.R. Martin uno de los más populares.`,
        images: [
            joshuaCairos1,
            joshuaCairos2,
            joshuaCairos3,
            joshuaCairos4,
            joshuaCairos5,
            joshuaCairos6,
            joshuaCairos7,
            joshuaCairos8,
            joshuaCairos9,
            joshuaCairos10,
        ],
        links: [
            {
                platform: "Web",
                url: "http://www.joshuacairos.com/",
            },
            {
                platform: "ArtStation",
                url: "https://www.artstation.com/joshuacairos",
            },
            {
                platform: "Instagram",
                url: "https://www.instagram.com/joshuacairos_art/",
            },
            {
                platform: "X",
                url: "https://x.com/1oshuart",
            },
            {
                platform: "Facebook",
                url: "https://www.facebook.com/1oshuart/",
            },
            {
                platform: "Scryfall",
                url: "https://scryfall.com/search?q=a%3A%22Joshua+Cairos%22&unique=cards&as=grid&order=name",
            },
        ],
    },

    {
        id: "martindediego",
        name: "Martín De Diego",
        image: martinDeDiegoProfilePhoto,
        position: { color: "success", label: "Martin De Diego" },
        description: `Martín De Diego Sádaba es un pintor, ilustrador y concept artist con más de veinte años de experiencia profesional. Como ilustrador para juegos, ha trabajado en más de cincuenta títulos de TTRPG, LCG y RPG, entre los que destacan Magic the Gathering, Star Wars LCG, LOTR LCG, Warhammer 40.000, Call of Cthulhu o Arkham Horror. También ha ilustrado portadas y desarrollado obra gráfica para libros (Cullen Boom, Felix Blackwell…), discos (Bonecarver, Lepoka, Againstmyself…), juegos (Scorn), series de TV como Memorias de Idhun (Netflix) o Romancero (Prime Video) y publicidad (BBDO, Señal Colombia TV). Ha participado con su trabajo y entrevistas en magazines impresos como Exposé, Imagine FX, Advanced Photoshop o Fantasy Artist.`,
        images: [
            martinDeDiego1,
            martinDeDiego2,
            martinDeDiego3,
            martinDeDiego4,
            martinDeDiego5,
            martinDeDiego6,
            martinDeDiego7,
            martinDeDiego8,
            martinDeDiego9,
            martinDeDiego10,
        ],
        links: [
            {
                platform: "ArtStation",
                url: "https://www.artstation.com/martindediego",
            },
            {
                platform: "Instagram",
                url: "https://www.instagram.com/martindediego",
            },
            {
                platform: "Scryfall",
                url: "https://scryfall.com/search?q=a%3A%22martin+de+diego%22&unique=cards&as=grid&order=name",
            },
        ],
    },
];

export default streamersData;
