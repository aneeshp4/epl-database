import React from 'react';
import FormatDate from '../utils/formatDate';
import '../styles/MatchDetails.css';

const MatchDetails = ({ match, onBackClick }) => {
    return (
        <div className="match-details">
            <div className="back-button">
                <button onClick={onBackClick}>Back</button>
            </div>
            <div className="match-header">
                <h2>{`${match.HomeTeam} vs ${match.AwayTeam}`}</h2>
                {match.HomeGoals > match.AwayGoals ? (
                    <h3>Winner: {match.HomeTeam}</h3>
                ) : match.HomeGoals < match.AwayGoals ? (
                    <h3>Winner: {match.AwayTeam}</h3>
                ) : (
                    <h3>Result: Draw</h3>
                )}
                <p>Date: {FormatDate.detailFormatDate(match.Date)}</p>
                <p>Referee: {match.Referee}</p>
            </div>
            <div className="match-section-container">
                <div className="match-section">
                    <h3>Goals</h3>
                    <div className="match-section-info">
                        <p>Home: {match.HomeGoals}</p>
                        <p>Away: {match.AwayGoals}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Yellow Cards</h3>
                    <div className="match-section-info">
                        <p>Home: {match.HomeYellows}</p>
                        <p>Away: {match.AwayYellows}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Red Cards</h3>
                    <div className="match-section-info">
                        <p>Home: {match.HomeReds}</p>
                        <p>Away: {match.AwayReds}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Fouls</h3>
                    <div className="match-section-info">
                        <p>Home: {match.HomeFouls}</p>
                        <p>Away: {match.AwayFouls}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Shots Taken</h3>
                    <div className="match-section-info">
                        <p>Home: {match.HomeShots}</p>
                        <p>Away: {match.AwayShots}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Shots on Target</h3>
                    <div className="match-section-info">
                        <p>Home: {match.HomeShotsOnTarget}</p>
                        <p>Away: {match.AwayShotsOnTarget}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Asian Handicap Odds</h3>
                    <div className="match-section-info">
                        <p>Home: {match.AvgAHH}</p>
                        <p>Away: {match.AvgAHA}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Over/Under 2.5 Goals Betting</h3>
                    <div className="match-section-info">
                        <p>Over: {match.AvgOver25}</p>
                        <p>Under: {match.AvgUnder25}</p>
                    </div>
                </div>
                <div className="match-section">
                    <h3>Average Odds</h3>
                    <div className="match-section-info">
                        <p>Away: {match.AvgA}</p>
                        <p>Home: {match.AvgH}</p>
                        <p>Draw: {match.AvgD}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;
