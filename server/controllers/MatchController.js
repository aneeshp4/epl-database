import Match from '../models/Match.js'; // Import the Match model

const MatchController = {
    async getFilteredMatches(req, res) {
        try {
            const { monthYear, team } = req.query;
            const matches = await Match.getFilteredMatches(monthYear, team);
            res.status(200).json(matches);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getMatch(req, res) {
        try {
            const matchID = req.params.matchID;
            const match = await Match.getMatch(matchID);
            res.status(200).json(match);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default MatchController;