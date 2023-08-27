import express from 'express';
import DropdownController from '../controllers/DropdownController.js';

const router = express.Router();

router.get('/', DropdownController.getDropdownData);

export default router;
