const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

//Static Files
app.use(express.static( path.join(process.cwd(),'public') ));
//console.log(path.join('..','/public'));
console.log(path.join(__dirname) );
console.log(path.join(process.cwd(),'public','index.html'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${ app.get('port') }`);
});