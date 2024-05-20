const express = require("express");

const port = 3000;

const app = express();

app.get("/", function (request, response) {
    response.send("<h2>Привет Express!!!!!!!!!!!</h2>");
});

app.listen(port, () => {
    console.log(`Server has been started Y`)
});