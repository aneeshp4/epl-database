import Dropdown from '../models/Dropdown.js'; // Import the Dropdown model

const DropdownController = {
  async getDropdownData(req, res) {
    try {
      const months = await Dropdown.getMonths();
      const teams = await Dropdown.getTeams();
      
      res.json({ 'months' : months, 'teams' : teams });
    } catch (error) {
      console.error('Error fetching dropdown data:', error);
      res.status(500).json({ error: 'An error occurred while fetching dropdown data.' });
    }
  },
};

export default DropdownController;
