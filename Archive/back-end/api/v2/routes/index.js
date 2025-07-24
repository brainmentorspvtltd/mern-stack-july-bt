import express from 'express';
import userRoutes from './user-routes.js';
import musicRoutes from './music-routes.js';

export const indexRoute = express.Router();
indexRoute.use('/user',userRoutes);
indexRoute.use('/music',musicRoutes);


