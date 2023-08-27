import './App.css';

import React, { useState, useEffect } from 'react';
import Dropdowns from './components/Dropdowns';
// import MatchTable from './MatchTable';
// import MatchDetails from './MatchDetails';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [dropdownData, setDropdownData] = useState({
        months: [],
        teams: [],
    });

    useEffect(() => {
        // Fetch matches when component mounts
        fetchMatches('*', '*');

        // Fetch dropdown data when component mounts
        fetchDropdownData();
    }, []);

    const fetchMatches = async (team, month) => {
        // Fetch initial matches
        const matchesURL = `${apiUrl}/matches?team=${team}&monthYear=${month}`;
        console.log(matchesURL);
        const response = await fetch(matchesURL);
        const data = await response.json();

        setMatches(data);
    };

    const fetchDropdownData = async () => {
        // Fetch dropdown data from API
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
        const response = await fetch(`/api/match/${matchId}`);
        const data = await response.json();
        setSelectedMatch(data);
    };

    return (
        <div className="App">
            <Dropdowns
                handleDropdownChange={handleDropdownChange}
                months={dropdownData.months}
                teams={dropdownData.teams}
            />
            {/* <MatchTable
                matches={matches}
                onMatchClick={handleMatchClick}
            />
            {selectedMatch && (
                <MatchDetails
                    match={selectedMatch}
                />
            )} */}
        </div>
    );
}

export default App;
