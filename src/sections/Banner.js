import Carousel from "react-material-ui-carousel";
import { MKBox, BannerCarouselItem } from "components";
import { bannerData } from "../pages/Presentation/data";

function Banner() {
    const { carouselItems } = bannerData;

    return (
        <MKBox
            width="100%"
            sx={{
                position: "relative",
                overflow: "hidden",
                height: "92vh",
                mt: -8,
                "@media (max-height: 600px)": {
                    height: "600px",
                },
            }}
        >
            <Carousel
                animation="fade"
                duration={1000}
                navButtonsAlwaysVisible={false}
                indicators={false}
                height="100%"
                sx={{
                    width: "100%",
                    height: "100%",
                    "& .MuiPaper-root": {
                        borderRadius: "xl",
                        overflow: "hidden",
                    },
                }}
            >
                {carouselItems.map((item, index) => (
                    <BannerCarouselItem key={index} item={item} />
                ))}
            </Carousel>
        </MKBox>
    );
}

export default Banner;
