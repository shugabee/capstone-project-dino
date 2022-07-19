require("dotenv").config();
const Sequelize = require("sequelize");
const {CONNECTION_STRING} = process.env;


const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres", 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});


const getDinos = (req, res) => {
    let { id } = req.params 

    sequelize.query(`select dinosaur_url
    from dinosaurs
    where dinosaur_id = ${id}`)

    .then(([data]) => res.status(200).send(data))
};

const getLocations = (req, res) => {
    let { id } = req.params
    sequelize.query(`select location_url
    from locations
    where location_id = ${id}`)
    .then(([data]) => {
        res.status(200).send(data)
    })
};

const createDino = (req, res) => {
    let { dinoName, dinoUrl } = req.body
    let newDino = {
        dinoName,
        dinoUrl 
    }
    sequelize.query(`insert into dinosaurs (dinosaur_name, dinosaur_url)
    values ('${dinoName}', '${dinoUrl}') 
    returning *`)
    .then((dino) => {
        res.status(200).send(dino[0])
        console.log(dino[0])
    })
};



const deleteDino = (req, res) => {
    res.status(200).send(res)
};


module.exports = { getDinos, getLocations, createDino, deleteDino };