const express = require('express');

const app = express();
const router = express.Router()

router.get('/liveness', (req, res) => {
    res.send('OK');
});

router.get('/version', (req, res) => {
    res.send({version: process.env.PREFIX});
});

app.use(`/${process.env.PREFIX}`, router);

module.exports = app;