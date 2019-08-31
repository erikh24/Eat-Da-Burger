
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// Create the router for the app, and export the router at the end of your file.
// Create all of our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (burgerData) {
        console.log(burgerData)
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function (req, res) {
   burger.insertOne(req.body.burger_name, function(result) {
       console.log(result);
       res.redirect("/");
   });
});

router.put("burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// Export routes for server.js to use.
module.exports = router;



