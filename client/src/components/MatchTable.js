import React, { useState, useEffect } from 'react';

function formatDate(dateString) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

const MatchTable = ({ matches, onMatchClick }) => {
  const itemsPerLoad = 15; // Number of matches to load per batch
  const [endIndex, setEndIndex] = useState(itemsPerLoad);
  const [visibleMatches, setVisibleMatches] = useState(Object.values(matches).slice(0, endIndex));


  const handleLoadMore = () => {
    const newEndIndex = endIndex + itemsPerLoad;
    setEndIndex(newEndIndex);
    setVisibleMatches(Object.values(matches).slice(0, newEndIndex));
  };

  useEffect(() => {
    setEndIndex(itemsPerLoad);
    setVisibleMatches(Object.values(matches).slice(0, itemsPerLoad));
  }, [matches]);


  return (
    <div className="match-table-container">
      <div className="match-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Home Goals</th>
              <th>Away Goals</th>
              <th>Result</th>
              <th>Home Goal Difference</th>
              <th>Away Goal Difference</th>
              <th>Referee</th>
              {/* Add more table headers for other attributes */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(visibleMatches).map(matchId => {
              const match = visibleMatches[matchId];
              return (
                <tr key={matchId} onClick={() => onMatchClick(match.MatchID)}>
                  <td>{formatDate(match.Date)}</td>
                  <td>{match.HomeTeam}</td>
                  <td>{match.AwayTeam}</td>
                  <td>{match.HomeGoals}</td>
                  <td>{match.AwayGoals}</td>
                  <td>{match.Result}</td>
                  <td>{match.HomeGoals - match.AwayGoals}</td>
                  <td>{match.AwayGoals - match.HomeGoals}</td>
                  <td>{match.Referee}</td>
                  {/* Add more table cells for other attributes */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {(Object.keys(visibleMatches).length < Object.keys(matches).length || false) && (<button onClick={handleLoadMore}>Load More</button>)}
    </div>
  );
};

export default MatchTable;
