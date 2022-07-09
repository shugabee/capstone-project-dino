const express = require('express');
const cors = require('cors');
const { getDinos, getLocations } = require('./controller')

const app = express();

app.use(express.json());
app.use(cors());



app.get('/api/dinosaurs/:id', getDinos);
app.get('/api/locations/:id', getLocations);




const PORT = 4000
app.listen(PORT, () => console.log(`we out here on ${4000}`));















// let name = []

// app.post('/name', (req, res) => {
//     const { newName } = req.body
//     name.push(newName)
//     res.status(200).send(name)
// });
//////////////////////////////////////////////