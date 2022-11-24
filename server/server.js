const express = require('express');
const app = express();
var json = require('./src/misc/passwordsave_backup.json');
const path = require("path");
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get("/json", async (req, res) => {
    await res.json(json);
})

app.use(express.static("client/build"));

app.listen(5000, () => {
    console.log("server started succ");
})
