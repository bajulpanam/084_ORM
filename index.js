const express = require('express')
const app = express();
const PORT = 3308
const db = require('./models')
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server Started on port 3308');
        })
    })
    .catch((err) => {
        console.log(err);
    });

    
