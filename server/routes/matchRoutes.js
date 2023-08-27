import express from 'express';
import MatchController from '../controllers/MatchController.js'; // Adjust the import path based on your file structure

const router = express.Router();

router.get('/', MatchController.getFilteredMatches);
router.get('/:matchID', MatchController.getMatch);

export default router;
