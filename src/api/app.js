const express = require('express');
const service = require('./service');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
    res.json(service.Items);
});

app.post('/api/items', (req, res) => {
    const model = req.body.model;
    if (!model) return res.status(400).json({ message: "The request is invalid" });
    service.AddItem(model);
    res.json(model);
});

app.delete('/api/items/:index', (req, res) => {
    const index = req.params.index;
    if (isNaN(index)) return res.status(400).json({ message: "The request is invalid" });
    service.DelItem(index)
    res.json(index);
});

app.listen(3000, () => console.log(`Api is started port ${port}`));