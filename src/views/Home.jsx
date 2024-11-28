import Carousel from "../components/Carousel";
import Card from "../components/Card";
import carouselList from "../components/data/CarouselList";
import cardsList from "../components/data/CardList";

export default function Home() {
    return (
        <>
            <Carousel items={carouselList} />
            <Card items={cardsList} />
        </>
    );
}
