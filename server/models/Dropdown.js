import query from '../utils/db.js'; // Import your database connection

// Model for the Dropdown data
class Dropdown {
    static async getMonths() {
        try {
            const months = await query('SELECT DISTINCT CONCAT(MONTHNAME(Date), " " , YEAR(Date)) AS DistinctMonthYear FROM Matches');
            return months.map((row) => row.DistinctMonthYear);
        } catch (error) {
            throw error;
        }
    }

    static async getTeams() {
        try {
            const teams = await query('SELECT DISTINCT TeamName from Team');
            return teams.map((row) => row.TeamName);
        } catch (error) {
            throw error;
        }
    }

}

export default Dropdown;

// TEST
// (async () => {
//     try {
//         const months = await Dropdown.getMonths();
//         console.log('Distinct Months:', months);

//         const teams = await Dropdown.getTeams();
//         console.log('Distinct Teams:', teams);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();


