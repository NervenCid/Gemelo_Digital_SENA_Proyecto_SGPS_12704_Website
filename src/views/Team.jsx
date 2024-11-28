import TeamCard from "../components/TeamCard";
import teamList from "../components/data/TeamList";

export default function Team() {
    return (
        <div className="team">
            <TeamCard teamList={teamList} />
            <TeamCard teamList={teamList} />
        </div>
    );
}
