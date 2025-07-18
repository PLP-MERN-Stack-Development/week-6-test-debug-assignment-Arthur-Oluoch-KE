import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bugRoutes from './routes/bugRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.use('/api/bugs', bugRoutes);

mongoose.connect('mongodb://localhost:27017/bugtracker').then(() =>
  app.listen(5000, () => console.log('Server running on http://localhost:5000'))
);
