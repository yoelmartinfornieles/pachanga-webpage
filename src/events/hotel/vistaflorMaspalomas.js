import vistaFlorLogo from "./images/vistaflor-logo.png";
import vistaFlor1 from "./images/vistaflor-1.jpg";
import vistaFlor2 from "./images/vistaflor-2.jpg";
import vistaFlor3 from "./images/vistaflor-3.jpg";
import vistaFlor4 from "./images/vistaflor-4.jpg";
import vistaFlor5 from "./images/vistaflor-5.jpg";
import vistaFlor6 from "./images/vistaflor-6.jpg";
import vistaFlor7 from "./images/vistaflor-7.jpg";
import vistaFlor8 from "./images/vistaflor-8.jpg";
import vistaFlor9 from "./images/vistaflor-9.jpg";
import vistaFlor10 from "./images/vistaflor-10.png";

const vistaflorMaspalomas = {
    name: "Vistaflor Maspalomas",
    location: "Av. Touroperador Neckermann, s/n, 35100 Maspalomas, Las Palmas",
    description: `
¡Bienvenidos a Vistaflor Maspalomas, donde la tranquilidad es tan real como un "Counterspell" a tu último Lightning Bolt! 
Ubicado en la zona más chill de Maspalomas, a un paso de las dunas que ríete tu del Oasis de Arabian y a tan solo 800 metros del campo de golf (perfecto para un buen "Fore" en tu próximo juego). 
Y si te apetece un poco de diversión, el parque de atracciones “Holiday World” está a 600 metros, ¡así que prepárate para lanzar tus dados de aventura!
Aquí, el clima es tan perfecto que los vascos se tiran de los pelos; disfruta de nuestra piscina climatizada para adultos y otra para los pequeños, con tumbonas y sombrillas que no te costarán ni un Maná. 
Relájate en tu Bungaló, en su amplia terraza o enviando fotos de tus mejores jugadas a través de su Wi-Fi de alta tecnología, disponible gratis en todo el complejo y en todos los bungalós. 
El bufé variado hará que te pongas de "Foods" hasta las trancas. 
Termina el día disfrutando de la terracita y de la piscina, porque en Vistaflor Bungalows garantizan las vacaciones perfectas para todos los viajeros, ya sean caminantes de planos, paracaidistas o simplemente mancos sin remedio.
`,
    logo: vistaFlorLogo,
    webpage: "https://hotelesvistaflor.com/bungalowsvistaflor/",
    photos: [
        vistaFlor1,
        vistaFlor2,
        vistaFlor3,
        vistaFlor4,
        vistaFlor5,
        vistaFlor6,
        vistaFlor7,
        vistaFlor8,
        vistaFlor9,
        vistaFlor10,
    ],
    position: { color: "warning" },
    services: [
        "Piscinas",
        "Wi-fi",
        "Tumbonas",
        "Animación",
        "Restaurante",
        "Autobús gratuito a la playa",
        "Mini-club",
        "Parque infantil",
    ],
    links: [
        {
            platform: "YouTube",
            url: "https://www.youtube.com/channel/UCn6sS78uRiSexBDFNWB22vg?view_as=subscriber",
        },
        {
            platform: "Facebook",
            url: "https://www.facebook.com/bungalowsvistaflor?modal=admin_todo_tour",
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/vistaflorbungalows/",
        },
        {
            platform: "Phone",
            url: "+34 928 767 540",
        },
        {
            platform: "Email",
            url: "reservas@hotelesvistaflor.com",
        },
        {
            platform: "Web",
            url: "https://hotelesvistaflor.com/bungalowsvistaflor/",
        },
    ],
    offers: {
        "Commander Paradise: 2nd Round": {
            intro: "¡Paracaaaaaas! ¡La oferta del hotel ya está disponible! Hemos reservado las siguientes estancias exclusivas para los participantes del torneo:",
            code: "PACHANGAMAYO2025",
            activeDates:
                "El código estará activo desde el 08 de enero hasta el 22 de mayo de 2025. ¡No te duermas en los laureles!",
            rooms: [
                {
                    name: "Bungalow Standard",
                    description:
                        "3 adultos máximo, 40 disponibles, ¡como los puntos de vida que te voy a quitar!",
                    price: "110€ por cada 2 personas/día, con pensión completa. ¡Vamos, que te sale más barato que un mazo de estándar! ",
                },
                {
                    name: "Bungalow Two Bedroom",
                    description:
                        "4 adultos máximo, 6 disponibles, por si quieres invitar a tus colegas planeswalkers.",
                    price: "110€ por cada 2 personas/día, con pensión completa. Es un chollako tan tirao como jugar un Faithless looting.",
                },
            ],
            cancellationConditions:
                "Las cancelaciones realizadas 33 días antes de la llegada no serán reembolsables. Si reservas hoy, el periodo de cancelación con gastos comenzará el 20 de abril de 2025. ¡Así que no te rajes a última hora, amig@!",
            purchaseLink:
                "https://direct-book.com/properties/hotelvistaflordirect?locale=es&checkInDate=2025-05-23&checkOutDate=2025-05-25&promocode=PACHANGAMAYO2025&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=EUR&trackPage=yes",
        },
        "Pachanga Tournament IV": null,
    },
};

export { vistaflorMaspalomas };
