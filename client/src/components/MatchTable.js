import React, { useState, useEffect } from 'react';
import FormatDate from '../utils/formatDate';
import '../styles/MatchTables.css';

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
          <thead className='table-header'>
            <tr >
              <th>Date</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Home Goals</th>
              <th>Away Goals</th>
              <th>Result</th>
              <th>Goal Difference</th>
              <th>Referee</th>
              {/* Add more table headers for other attributes */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(visibleMatches).map(matchId => {
              const match = visibleMatches[matchId];
              return (
                <tr key={matchId}
                  onClick={() => onMatchClick(match.MatchID)}
                  className='table-row' >
                  <td>{FormatDate.formatDate(match.Date)}</td>
                  <td>{match.HomeTeam}</td>
                  <td>{match.AwayTeam}</td>
                  <td>{match.HomeGoals}</td>
                  <td>{match.AwayGoals}</td>
                  <td>{match.Result}</td>
                  <td>{Math.abs(match.HomeGoals - match.AwayGoals)}</td>
                  <td>{match.Referee}</td>
                  {/* Add more table cells for other attributes */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='load-more-button-container'>
        {(Object.keys(visibleMatches).length < Object.keys(matches).length || false) &&
          (<button onClick={handleLoadMore}>
            Load More
          </button>)}
      </div>
    </div>
  );
};

export default MatchTable;
