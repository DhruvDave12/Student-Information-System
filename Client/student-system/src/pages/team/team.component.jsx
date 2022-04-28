import React from "react";
import './team.styles.css';
import teamJson from '../../components/util/team.data.json';
import TeamData from "../../components/teamdata/teamdata.component";

const Team = () => {
    let teamArr = teamJson.team;
    console.log(teamArr);
    return (
        <div className="team-wrap">

            <div className="team-title">
                <p className="team-title">WE ~ "THE TEAM"</p>
            </div>

            <div className="inner-wrap">
                {
                    teamArr.map(item => (
                        <TeamData key={item.id}
                            name={item.name.toUpperCase()}
                            position={item.position}
                            image={item.image}
                            gitlink={item.github}
                            linkedlink={item.linkedin}
                            instalink={item.insta}
                            maillink={item.mail} />
                    ))
                }
            </div>
        </div>
    )
}

export default Team;