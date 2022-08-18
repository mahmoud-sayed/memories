import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouts from './routes/posts.js';

const app = express();

app.use('/posts', postsRouts);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//DB connection 
const connectionURL = 'mongodb+srv://admin:u0wqqZZYozcCZpvS@cluster0.ik4ydce.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(connectionURL)
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err.message));
