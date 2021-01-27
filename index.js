const express = require('express');
const engines = require('consolidate');
const exphbs = require('express-handlebars');
const projects = require('./routes/projects');


const app = express();
const PORT = process.env.PORT || 8080
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');


app.get('/', (req, res)=>{
    const content = {
        title: "Home",
        name: "Joseph Max"
    }
    res.render('index', content);
})

app.use('/projects', projects)

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
})