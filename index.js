const express = require('express');
const engines = require('consolidate');
const exphbs = require('express-handlebars');
const projects = require('./routes/projects');
// const path = require('path')


const app = express();
const PORT = process.env.PORT || 8080
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

// app.use(express.static(path.join(__dirname, '/public')));


const prototypeUser = {
    userId: "5735810494103552"
}

app.get('/', (req, res)=>{
    const content = {
        title: "Home",
        name: "Joseph Max"
    }
    res.render('index', content);
})

app.use('/projects', projects)

// get a list of projects assigned to a user
app.use('users/:userId/', projects)

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
})