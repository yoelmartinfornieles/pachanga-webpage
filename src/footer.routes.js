// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import { pachangaGreyLogo } from "assets/images/logos";

const fecha = new Date().getFullYear();

const configuracion = {
    marca: {
        nombre: "Pachanga Tournament",
        imagen: pachangaGreyLogo,
        ruta: "/",
    },
    redesSociales: [
        {
            icono: <FacebookIcon />,
            enlace: "https://www.facebook.com/p/Pachanga-Tournament-100083619990138/",
        },
        {
            icono: <TwitterIcon />,
            enlace: "https://twitter.com/pachangaTorneo",
        },
        {
            icono: <InstagramIcon />,
            enlace: "https://www.instagram.com/pachangatournament/",
        },
    ],
    menus: [
        {
            nombre: "empresa",
            elementos: [
                {
                    nombre: "sobre nosotros",
                    href: "https://www.pachangatournament.com/about-us",
                },
            ],
        },
        {
            nombre: "ayuda y soporte",
            elementos: [
                {
                    nombre: "contáctanos",
                    href: "https://www.pachangatournament.com/contact-us",
                },
                {
                    nombre: "patrocinios",
                    href: "https://www.pachangatournament.com/sponsorships",
                },
            ],
        },
        {
            nombre: "legal",
            elementos: [
                {
                    nombre: "términos y condiciones",
                    href: "https://www.pachangatournament.com/terms",
                },
                {
                    nombre: "política de privacidad",
                    href: "https://www.pachangatournament.com/privacy",
                },
                {
                    nombre: "licencias (EULA)",
                    href: "https://www.pachangatournament.com/licenses",
                },
            ],
        },
    ],
    derechosDeAutor: (
        <MKTypography variant="button" fontWeight="regular">
            Todos los derechos reservados. Copyright &copy; {fecha} por{" "}
            <MKTypography
                component="a"
                href="https://www.pachangatournament.com"
                target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"
            >
                Yoel Martin & Pachanga Tournament
            </MKTypography>
            .
        </MKTypography>
    ),
};

export default configuracion;
