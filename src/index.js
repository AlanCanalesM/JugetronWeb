const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// rotes
app.use(require('./routes/index'));

//Start the server
app.listen(app.get('port'), () => {
    console.log('${app.get ');
});