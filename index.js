var express = require("express");
// var cors = require("cors");
var fs = require("fs");
var app = express();

app.set("port", process.env.PORT || 5000);
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
// app.use(cors());

app.listen(app.get("port"), function () {
	console.log("Node app is running at localhost:" + app.get("port"));
});

// http://localhost:5000/
// app.get("/", function (request, response) {
// 	fs.readFile("./public/index.html", "utf-8", function (err, data) {
// 		response.writeHead(200, { "Content-Type": "index/html" });
// 		response.write(data);
// 		response.end();
// 	});
// });
