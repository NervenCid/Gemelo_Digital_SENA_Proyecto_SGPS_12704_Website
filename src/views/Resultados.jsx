import HeroResultado from "../components/HeroResultados";
import invernaderoList from "../components/data/InvernaderoList";

export default function Resultado() {
    return (
        <>
            <HeroResultado items={invernaderoList}/>
        </>
    );
}
