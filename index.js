const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/madick", (req, res) =>
	res.json({ "1": "Bob's dick is larger than mine!" })
);

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
