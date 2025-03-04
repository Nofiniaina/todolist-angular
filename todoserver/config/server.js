const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

function connectDatabase(){
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected');
    }).catch((err) =>  {
        console.log(err);
    });
}

exports.connectDatabase = connectDatabase;

