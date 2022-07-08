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

// const getDinosaur = (req, res) => {
//     sequelize.query('select * from dinosaurs')
//     .then(([dinosaur]) => res.status(200).send(dinosaur)) 
//     .catch((error) => console.log(error))
// }

// const getBrach = (req, res) => {
//     const { dinosaurId } = req.params
//     console.log(dinosaurId)

//     sequelize.query(`select dinosaurs.dinsaur_id 
//     from dinosaurs 
//     where dinosaur_id = ${dinosaurId}`)

//     .then(([dinosaur]) => res.status(200).send(dinosaur[1]))
//     .catch((error) => console.log(error))
// }

const getDino = (req, res) => {
    let { dinosaurId } = req.params 

    sequelize.query(`select dinosaur_url
    from dinosaurs
    where dinosaur_id = ${dinosaurId}`)

    .then(([data]) => res.status(200).send(data))
}


module.exports = { getDino }