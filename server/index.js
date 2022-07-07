const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const app = require('./app');
const port = process.env.PORT || 3000;

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to database & listening on port ${port}.`)
        });
    })
    .catch((error) => {
        console.log(error)
    });
