import React, { useState } from 'react';
import '../styles/Dropdowns.css';

function Dropdowns({ handleDropdownChange, months, teams }) {
    const [selectedMonth, setSelectedMonth] = useState('All Months');
    const [selectedTeam, setSelectedTeam] = useState('All Teams');

    const handleMonthChange = (event) => {
        const month = event.target.value;
        setSelectedMonth(month);
        handleDropdownChange(month, selectedTeam);
    };

    const handleTeamChange = (event) => {
        const team = event.target.value;
        setSelectedTeam(team);
        handleDropdownChange(selectedMonth, team);
    };

    return (
        <div className='dropdown'>
            <select value={selectedMonth} onChange={handleMonthChange}>
                {months.map((month, index) => (
                    <option key={index} value={month}>
                        {month}
                    </option>
                ))}
            </select>

            <select value={selectedTeam} onChange={handleTeamChange}>
                {teams.map((team, index) => (
                    <option key={index} value={team}>
                        {team}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdowns;
