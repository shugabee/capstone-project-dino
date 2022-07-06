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

const getDinosaur = (req, res) => {
    sequelize.query('select * from dinosaurs')
    .then(([dinosaur]) => res.status(200).send(dinosaur)) 
    .catch((error) => console.log(error))
}

// const getDinosaur = (req, res) => {
//     sequelize.query('select ')
// }




module.exports = { getDinosaur }