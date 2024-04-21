import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAddPlayer = () =>{
        setTeam(team + 1);
    }

    const handleReducePlayer = () =>{
        setTeam(team - 1);
    }

    const teamStyle = {
        border: "2px solid purple",
        padding: "1rem",
        margin: "1rem",
        borderRadius: "1rem"
    }

    return (
        <div style={teamStyle}>
            <h2>Team: {team}</h2>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleReducePlayer}>Reduce Player</button>
        </div>
    )
}