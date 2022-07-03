const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());





let name = []

app.post('/name', (req, res) => {
    const { newName } = req.body
    name.push(newName)
    res.status(200).send(name)
});


app.listen(4000, () => console.log('we out here on 4000'));