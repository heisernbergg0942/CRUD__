import express from 'express';
const app = express();
import userRouter from './routes/user.js';
import mongoose from './db/database.js';

app.use(express.json());


app.use('/user', userRouter);

app.listen(3000);
console.log("server running on port 3000")

