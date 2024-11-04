const app = require('./app');

const port = 3000;

app.get('/', (req, res) => {
    res.send("running");
});

app.post('/data', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`App listen on port:${port}`);
});