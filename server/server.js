const express = require('express');
const cors = require('cors');
const { getDinos, getLocations, createDino, deleteDino } = require('./controller')

const app = express();

app.use(express.json());
app.use(cors());


app.get('/api/dinosaurs/:id', getDinos);
app.get('/api/locations/:id', getLocations);
app.post('/api/dinosaur', createDino)
app.delete('/api/delete', deleteDino);


const PORT = 4000
app.listen(PORT, () => console.log(`we out here on ${4000}`));

