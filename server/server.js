const express = require('express');
const cors = require('cors');
const {getDino} = require('./controller')

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/api/getDinosaur', getDinosaur);



app.get('/api/dinosaurs/:dinosaurId', getDino);



const PORT = 4000
app.listen(PORT, () => console.log(`we out here on ${4000}`));















// let name = []

// app.post('/name', (req, res) => {
//     const { newName } = req.body
//     name.push(newName)
//     res.status(200).send(name)
// });
//////////////////////////////////////////////