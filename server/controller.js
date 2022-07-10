require("dotenv").config();
const Sequelize = require("sequelize");
const {CONNECTION_STRING} = process.env


const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres", 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});


let dinoId = 6;

const getDinos = (req, res) => {
    let { id } = req.params 

    sequelize.query(`select dinosaur_url
    from dinosaurs
    where dinosaur_id = ${id}`)

    .then(([data]) => res.status(200).send(data))
}

const getLocations = (req, res) => {
    let { id } = req.params
    sequelize.query(`select location_url
    from locations
    where location_id = ${id}`)
    .then(([data]) => res.status(200).send(data))
}


const createDino = (req, res) => {
    let newDino = {...req.body, dinoId }

    res.status(200).send(data)
    dinoId++
   
}






const deleteDino = (req, res) => {
    
    res.sendStatus(200)
}


module.exports = { getDinos, getLocations, createDino, deleteDino }