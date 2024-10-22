import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Cards from "../components/data/Cards";

export default function Home() {
    const CardList = Cards.map(v => {
        return <Card key={v.id} title={v.title} description={v.description} image={v.image}/>
    })
    return(
        <>
            <Carousel/>
            <div className="container">
            {CardList}
            </div>
        </>
    );
}