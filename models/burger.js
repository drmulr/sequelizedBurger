// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burger", {
  name: {
    type: Sequelize.STRING
  },
  eaten: {
    type: Sequelize.BOOLEAN
    defaultValue: Sequelize.FALSE
  }
}, {
  timestamps: false
});

// Syncs nodwith DB
Burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burger;
