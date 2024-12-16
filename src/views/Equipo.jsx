import TeamCard from "../components/TeamCard";
import teamList from "../components/data/TeamList";

export default function Equipo() {
    return (
        <div className="team">
            <TeamCard teamList={teamList} />
        </div>
    );
}
