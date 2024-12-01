import { ivanOjedaProfilePhoto } from "../../../../assets/images";
const streamersData = [
    {
        name: "Ivan Ojeda",
        image: ivanOjedaProfilePhoto,
        position: { color: "error", label: "Ivan Ojeda" },
        description: `Iván Ojeda ha estado en el juego desde 2015, y desde 2019 se ha transformado en un creador de contenido detrás de "Modern State Of Mind". Es un habitual en todos los eventos reconocidos.
Además de sus directos en Twitch, Iván entretiene a sus seguidores con "OJEDATalks", el podcast de Magic más popular del panorama nacional. Ha estado presente en los últimos 7 European Regional Championships, viajando por toda Europa en busca de gloria y, por supuesto, ¡los mejores lugares para comer! 🍽️ Porque, seamos sinceros, ¿quién puede jugar bien con el estómago vacío?
Como la voz autorizada del Modern en español, Iván tiene más experiencia como caster de Magic que yo en hacer chistes malos (y eso es decir mucho). Ya participó en la cobertura de las dos ediciones anteriores del Pachanga Tournament, y en esta cuarta edición, estará acompañado por Carlos Oliveros, con quien narrará mano a mano las mejores jugadas. ¡No os lo perdáis! 
Así que, si quieres ver a Iván en acción, ¡prepárate para un espectáculo que no querrás perderte!`,
        links: [
            {
                platform: "YouTube",
                url: "https://www.youtube.com/modernstateofmind",
            },
            { platform: "Twitch", url: "https://www.twitch.tv/modestofmind" },
            { platform: "X", url: "https://x.com/MTGOjeda" },
        ],
    },
    {
        name: "Carlos Oliveros",
        image: "https://pbs.twimg.com/profile_images/1708956064182370304/Izp34mzr_400x400.jpg",
        position: { color: "error", label: "Carlos Oliveros" },
        description: `Carlos ha estado lanzando hechizos y haciendo jugadas épicas desde 2006. Con un carácter competitivo que haría temblar a cualquier Planeswalker, finalmente logró acceder al Pro Tour en 2017. ¡Sí, lo hizo! Y adivina qué, se encontró con nuestro querido Iván Ojeda. ¡Qué casualidad, eh? 
Después de un impresionante Top 16 en el Pro Tour Modern Horizons 3, ahora está en camino a Chicago, donde esperamos que no solo se lleve el trofeo, sino también un buen plato de comida. 
Actualmente, es parte del Team Worldly Counsel Heavy Play, así que ya sabes, ¡no te metas con él!
Pero eso no es todo, amigos. En 2016, junto a un grupo de amigos de Madrid (sí, esos que siempre están en la barra), fundó Show&Tell. ¿Y qué traían? ¡Contenido a raudales! Artículos, streamings y podcasts que hacían que la gente se quedara pegada a sus pantallas. Tras 5 años de pura diversión, cerraron las puertas, pero Carlos no se detuvo. Ahora tiene su propio canal de Twitch y YouTube, donde puedes verlo prepararse para torneos y seguir las últimas noticias del metajuego y nuevas barajas. 
¿Quieres saber qué trama? ¡Síguelo en Twitter como @CarlosOlivetti y en Twitch y YouTube como CarlosOliverosMTG! No te arrepentirás, ¡prometido!`,
        links: [
            { platform: "YouTube", url: "https://youtube.com/streamertwo" },
            { platform: "Twitch", url: "https://twitch.tv/streamertwo" },
            { platform: "X", url: "https://x.com/streamertwo" },
        ],
    },
];

export default streamersData;
