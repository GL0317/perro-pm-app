const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    let pageName = "Project List"
    const content = {
        title: pageName,
        msg: "The project list page",
        heading: pageName
    }
    res.render('projectList', content)
})

router.get('/projects', (req, res) =>{
    res.send("Nope!!!")
})


module.exports = router