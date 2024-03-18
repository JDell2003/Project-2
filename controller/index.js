var express = require('express');
var router = express.Router();

module.exports = {
    index
}




//USER STORY: Renders Home Page
function index(req, res, next) {
    res.render('index', { title: 'Express' });
  };

//USER Story: Adds USERS outfits to its own user DATABASE






