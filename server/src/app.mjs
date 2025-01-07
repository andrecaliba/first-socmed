import express from 'express';
import routes from './routes/routes.mjs';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  credentials: true
}));
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true,
    sameSite: 'strict'
  } // Set to true if using HTTPS
}));
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
})
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});