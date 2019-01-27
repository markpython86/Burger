//require express package
var express = require("express");
var bodyParser = require('body-parser');
//create a new port to your connection.
// left hand side for using a deployed website
// right hand side for using local development
var PORT = process.env.PORT || 3000;


//assign express application/package to a variable app
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// to retain the directory public as the main directory
app.use(express.static(process.cwd() +"/public"));


//This is a built-in middleware function in Express. 
//It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(bodyParser.urlencoded({ extended: false }));
// console.log("testing: "+testing)
// Parse request body as JSON
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use('/', routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
