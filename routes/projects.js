const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    const content = {
        title: "Project List",
        msg: "The project list page",
        layout: "page"
    }
    res.render('projectList', content)
})


module.exports = router