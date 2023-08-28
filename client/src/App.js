import './App.css';

import React, { useState, useEffect } from 'react';
import Dropdowns from './components/Dropdowns';
import MatchTable from './components/MatchTable';
import MatchDetails from './components/MatchDetails';
import './App.css';

// API URL from .env file
const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [dropdownData, setDropdownData] = useState({
        months: [],
        teams: [],
    });
    const [showMatchDetails, setShowMatchDetails] = useState(false);

    useEffect(() => {
        // Fetch matches when component mounts
        fetchMatches('*', '*');

        // Fetch dropdown data when component mounts
        fetchDropdownData();
    }, []);

    // Fetch matches
    const fetchMatches = async (team, month) => {
        const matchesURL = `${apiUrl}/matches?team=${team}&monthYear=${month}`;
        const response = await fetch(matchesURL);
        const data = await response.json();

        setMatches(data);
    };

    // Fetch dropdown data from API
    const fetchDropdownData = async () => {
        try {
            const response = await fetch(`${apiUrl}/dropdowns`);
            const data = await response.json();

            const modifiedData = {
                months: ['All Months', ...data.months],
                teams: ['All Teams', ...data.teams],
            };

            setDropdownData(modifiedData);
        } catch (error) {
            console.error('Error fetching dropdown data:', error);
        }
    };

    const handleDropdownChange = async (month, team) => {
        const monthArg = month === 'All Months' ? '*' : month;
        const teamArg = team === 'All Teams' ? '*' : team;
        await fetchMatches(teamArg, monthArg);

    };

    const handleMatchClick = async (matchId) => {
        // Fetch details of a specific match
        console.log(` Match clicked: ${matchId}`);
        const response = await fetch(`${apiUrl}/matches/${matchId}`);
        const data = await response.json();
        setSelectedMatch(data);
        setShowMatchDetails(true);
        console.log(data);
    };

    const handleBackClick = () => {
        setSelectedMatch(null);
        setShowMatchDetails(false);
    };

    return (
        <div className="app">

            {!showMatchDetails && (
                <div className='dropdown-and-table'>
                    <Dropdowns
                        handleDropdownChange={handleDropdownChange}
                        months={dropdownData.months}
                        teams={dropdownData.teams}
                    />
                    <MatchTable
                        matches={matches}
                        onMatchClick={handleMatchClick}
                    />
                </div>)}
            {showMatchDetails && (
                <MatchDetails
                    match={selectedMatch}
                    onBackClick={handleBackClick}
                />
            )}
        </div>
    );
}

export default App;
