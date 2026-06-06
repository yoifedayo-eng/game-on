import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'Game On Backend is running',
    timestamp: new Date()
  });
});

// API Routes (to be implemented)
app.get('/api/v1', (req: Request, res: Response) => {
  res.json({ 
    message: 'Game On API v1',
    endpoints: {
      auth: '/api/v1/auth',
      users: '/api/v1/users',
      games: '/api/v1/games',
      tournaments: '/api/v1/tournaments',
      teams: '/api/v1/teams',
      wallets: '/api/v1/wallets'
    }
  });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response) => {
  console.error(err);
  res.status(err.status || 500).json({ 
    error: err.message || 'Internal Server Error',
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`🎮 Game On Backend running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
