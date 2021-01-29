const express = require('express')
const router = express.Router()
const apiUrl = "https://perro-project-012021.appspot.com"
const fetch = require('node-fetch');

const prototypeUser = {
    userId: "5735810494103552"
}

const api = {
    userProjects: `${apiUrl}/users/${prototypeUser.userId}/projects`
}


const fetchData = async (url) => {
    let data = await fetch(url);
    let jsonData = await data.json();
    return jsonData;
}


const getProjects = async (url) => {
    let projectData = await fetchData(url);
    return projectData;
}

/*
const getAllUsers = async (url) => {
    let usersData = await fetch(url)
}

const allUsers = {}
*/


router.get('/', async (req, res) =>{
    let pageName = "Project List"
    const content = {
        title: pageName,
        msg: "The project list page",
        heading: pageName,
        username: "glindor",
        userrole: "manager"
    }
    content.projects = await getProjects(api.userProjects)
    content.projects.forEach(element => {
        element.completedTasks = 0;
        element.remainingTasks = 0;
        element.totalTasks = 0;
        element.complete = 0;
        
    });
    res.render('projectList', content)
})

/*
router.get('/projects', (req, res) =>{
    let pageName = 'Project List'
    const content = {
        title: pageName,
        msg: 'The project list page',
        heading: pageName
    }
    res.render('projectList', content)
})
*/

module.exports = router