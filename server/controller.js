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
}

const getLocations = (req, res) => {
    let { id } = req.params

    sequelize.query(`select location_url
    from locations
    where location_id = ${id}`)

    .then(([data]) => res.status(200).send(data))
}



module.exports = { getDinos, getLocations }