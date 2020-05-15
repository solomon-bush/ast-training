const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const routes = require('./routes');
const middleware = require('./middleware');

const cors = require('cors')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

middleware._SET(app);
routes._SET(app);



module.exports.start = () =>{
    app.listen(process.env.SERVER_PORT, () => {
        console.log('Listening on',process.env.SERVER_PORT)
    })
}