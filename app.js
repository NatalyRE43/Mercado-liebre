const { Console } = require('console');
const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')));
app.use( express.static(path.resolve(__dirname, './views')));

app.listen(process.env.PORT, () => {
        Console.log("Servidor corriendo en el puerto 3000")
    }
);

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});