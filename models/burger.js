const orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(vals, cb) {
        orm.insertOne("burgers", ["burger_name"], vals, function(res) {
            cb(res);
        });
    },
    
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;




