const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Hello Vidal!');
});

app.listen(3001);