const express = require("express");

const app = express();

app.use("/style", express.static(__dirname + "/style"));
app.use("/dist", express.static(__dirname + "/dist"));
app.use("/img", express.static(__dirname + "/img"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(4000);