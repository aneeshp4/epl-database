import express from 'express';
import matchRoutes from './routes/matchRoutes.js';
import dropdownRoutes from './routes/dropdownRoutes.js';

const app = express();

app.use('/api/matches', matchRoutes);
app.use('/api/dropdowns', dropdownRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
