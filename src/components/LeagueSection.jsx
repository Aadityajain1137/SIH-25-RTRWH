import { useState } from "react";
import "./LeagueSection.css";

const LeagueSection = () => {
  const [users] = useState([
    { name: "Aaditya", points: 950 },
    { name: "Ritika", points: 670 },
    { name: "Aman", points: 420 },
  ]);

  const getLeague = (points) => {
    if (points >= 800) return { title: "Gold League", color: "#FFD700", icon: "🥇" };
    if (points >= 500) return { title: "Silver League", color: "#C0C0C0", icon: "🥈" };
    return { title: "Bronze League", color: "#CD7F32", icon: "🥉" };
  };

  return (
    <div className="form-box">
      <div className="league-container">
        <h2 className="league-heading">🌊 जल निधि League</h2>
        <div> <strong>Your Position : Gold</strong> </div>
        <div className="league-users">
          {users.map((user, index) => {
            const league = getLeague(user.points);
            return (
              <div
                key={index}
                className="league-card"
                style={{ borderLeft: `6px solid ${league.color}` }}
              >
                <span className="league-icon">{league.icon}</span>
                <div className="league-info">
                  <h3 style={{ color: league.color }}>{league.title}</h3>
                  <h4>{user.name}</h4>
                  <p>{user.points} pts</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeagueSection;
