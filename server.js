import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; //To connect with database
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { getUsers, addUser } from './controllers/user.js';
// router = require('./routes/user.js');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

//routes
app.post('/user', addUser);
app.get('/user', getUsers);
app.get('/', async(req, res) => {
    var users = await getUsers();
    res.render('user', { users: users });
});

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb conncetion success!");
});

app.listen(PORT, () => {
    console.log('Server is up and running on port: ' + PORT);
})