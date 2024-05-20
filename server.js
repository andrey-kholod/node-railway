const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", function (request, response) {
    response.send("<h2>Привет Express!</h2>");
});

app.listen(port,  "0.0.0.0", () => {
    console.log(`Server has been started`)
});