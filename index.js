import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/index.js';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle CORS
app.use(cors({
    origin: "https://rohit-portfolio-two.vercel.app",
    credentials: true
}));
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

// Middleware to parse cookies
app.use(cookieParser());

// Route definitions
app.use('/api', router);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
