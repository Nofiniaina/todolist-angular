const express =require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const database = require('./config/server');

// routes
const taskRoute = require('./routes/TaskRoute');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

database.connectDatabase();

app.use('/tasks', taskRoute);

app.listen(PORT, () =>  {
    console.log(`Server is running on port ${PORT}`);
});

