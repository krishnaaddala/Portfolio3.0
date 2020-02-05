// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/projects", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Project.findAll({}, function(data){
        res.json(data)
    })
  });


// Attempted to do a POST route but did not have luck finishing through this.


//   // POST route for saving a new post
//   app.post("/api/posts", function(req, res) {
//     // Add sequelize code for creating a post using req.body,
//     // then return the result using res.json
//   });
};
