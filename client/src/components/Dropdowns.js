import React, { useState } from 'react';

function Dropdowns({ handleDropdownChange, months, teams }) {
    const [selectedMonth, setSelectedMonth] = useState('All Months');
    const [selectedTeam, setSelectedTeam] = useState('All Teams');

    const handleMonthChange = (event) => {
        const selectedMonth = event.target.value;
        setSelectedMonth(selectedMonth);
        handleDropdownChange(selectedMonth, selectedTeam);
    };

    const handleTeamChange = (event) => {
        const selectedTeam = event.target.value;
        setSelectedTeam(selectedTeam);
        handleDropdownChange(selectedMonth, selectedTeam);
    };

    return (
        <div className='Dropdown'>
            {console.log(months)}
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
