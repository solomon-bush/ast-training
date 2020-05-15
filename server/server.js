const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

routes._SET(app);



module.exports.start = () =>{
    app.listen(process.env.SERVER_PORT, () => {
        console.log('Listening on',process.env.SERVER_PORT)
    })
}