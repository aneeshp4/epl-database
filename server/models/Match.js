import query from '../utils/db.js'; // Import your database connection

class Match {
    static async getFilteredMatches(monthYear = '*', team = '*') {
        try {
            let cols = 'm.MatchID, m.Date, t1.TeamName AS HomeTeam, t2.TeamName AS AwayTeam, m.FTR AS Result, m.FTHG AS HomeGoals, m.FTAG AS AwayGoals, \
            m.HC AS HomeCorners, m.AC AS AwayCorners, m.HF AS HomeFouls, m.AF AS AwayFouls, m.HR AS HomeReds, m.AR AS AwayReds, m.HY AS HomeYellows, m.AY AS AwayYellows, \
            m.HS AS HomeShots, m.AS AS AwayShots, m.HST AS HomeShotsOnTarget, m.AST AS AwayShotsOnTarget, m.Referee';
            let queryText = `SELECT ${cols} FROM Matches AS m JOIN Team AS t1 ON m.HomeTeam = t1.TeamID JOIN Team AS t2 ON m.AwayTeam = t2.TeamID`;

            if (monthYear !== '*' && team !== '*') {
                queryText += `  WHERE CONCAT(MONTHNAME(m.Date), " " , YEAR(m.Date)) = '${monthYear}' \
                        AND (t1.TeamName = '${team}' OR t2.TeamName = '${team}') `;
            } else if (monthYear !== '*') {
                queryText += ` WHERE CONCAT(MONTHNAME(m.Date), " " , YEAR(m.Date)) = '${monthYear}'`;
            } else if (team !== '*') {
                queryText += ` WHERE t1.TeamName = '${team}' OR t2.TeamName = '${team}' `;
            }

            const matches = await query(queryText);
            const formattedMatches = matches.map(row => ({ ...row }));
            const matchesById = {};

            formattedMatches.forEach(match => {
                const matchId = parseInt(match.MatchID, 10);
                matchesById[matchId] = match;
            });
            return matchesById;
        } catch (error) {
            throw error;
        }
    }

    static async getMatch(matchID) {
        try {
            let cols = 'm.MatchID,  m.Date, t1.TeamName AS HomeTeam, t2.TeamName AS AwayTeam, m.FTR AS Result, m.FTHG AS HomeGoals, m.FTAG AS AwayGoals, \
            m.HC AS HomeCorners, m.AC AS AwayCorners, m.HF AS HomeFouls, m.AF AS AwayFouls, m.HR AS HomeReds, m.AR AS AwayReds, m.HY AS HomeYellows, m.AY AS AwayYellows, \
            m.HS AS HomeShots, m.AS AS AwayShots, m.HST AS HomeShotsOnTarget, m.AST AS AwayShotsOnTarget, m.Referee, ahb.AvgAHH, ahb.AvgAHA, oub.AvgOver25, \
            oub.AvgUnder25, o.AvgH, o.AvgD, o.AvgA';

            let queryText = `   SELECT ${cols} FROM Matches AS m \ 
                                JOIN OverUnderBetting AS oub ON oub.MatchID = m.MatchID \ 
                                JOIN AsianHandicapBetting AS ahb ON ahb.MatchID = m.MatchID \ 
                                JOIN Odds AS o ON o.MatchID = m.MatchID \ 
                                JOIN Team AS t1 ON m.HomeTeam = t1.TeamID \ 
                                JOIN Team AS t2 ON m.AwayTeam = t2.TeamID
                                WHERE m.MatchID = ${matchID}`;

            const match = await query(queryText);
            const formattedMatch = match.map(row => ({ ...row }));
            return formattedMatch[0];
        } catch (error) {
            throw error;
        }
    }
}

export default Match;

// TEST
// (async () => {
//     try {
//         const result = await Match.getFilteredMatches('August 2019', 'Arsenal');
//         console.log(result);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
// (async () => {
//     try {
//         const matchID = 1;
//         const match = await Match.getMatch(matchID);
//         console.log('Match details:', match);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();

