const express = require("express");

const PORT = 3000

const app = express();

app.get("/", function (request, response) {
    response.send("<h2>Привет Express!</h2>");
});

app.listen(PORT, () => {
    console.log(`Server has been started`)
});