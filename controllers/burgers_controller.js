
const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");


router.get("*", function (req, res) {
  burger.selectAll(function (data) {
    var burgersReadyToEat = [];
    var burgersDevoured = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].devoured === 1) {
        burgersDevoured.push(data[i]);
      } else {
        burgersReadyToEat.push(data[i]);
      }
    }
    res.render("index", { burgersReadyToEat: burgersReadyToEat, burgersDevoured: burgersDevoured });
  })
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([req.body.burger_name], function (data) {
    res.status(204).end();
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var id = `id = ${req.params.id}`;
  burger.updateOne(req.body, id, function (data) {

    if (data.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(204).end();
  });
});

// Export routes for server.js to use.
module.exports = router;



