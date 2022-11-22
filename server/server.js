const express = require('express');
const app = express();
var json = require('./src/misc/passwordsave_backup.json');

app.get("/json", async (req, res) => {
    await res.json(json);
})

app.listen(5000, () => {
    console.log("server started succ");
})