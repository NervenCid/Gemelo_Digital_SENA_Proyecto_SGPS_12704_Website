import ArtState from "../components/Hero";
import InvernaderoCard from "../components/InvernaderoCard";
import CardInvernaderoList from "../components/data/CardInvernaderoList";

export default function Invern() {
    return (
        <>
            <ArtState />
            <InvernaderoCard items = {CardInvernaderoList}/>
        </>
    );
}
