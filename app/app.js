const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    const ip = req.connection.remoteAddress;
    res.send(`Imam Syuhada | your ipaddr: ${ip}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
