const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const SECRET = "mysecret";

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(403).send('Invalid credentials');
    }
});

app.listen(5001, () => console.log('Auth service on port 5001'));
