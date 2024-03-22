var express = require('express');
var router = express.Router();
const newURLModel = require('../models/newURL.js');
const newURL = require('./newURL.js');

module.exports = {
    index,
    delete: deleteOutfit,
    update
};


//USER STORY: Renders Home Page
async function index(req, res, next) {
    try {
        // Find all documents in the collection
        const data = await newURLModel.find({});
    
        // using Map to get just the URLs from the data
        urls = data.map(item => item.imageUrl);

        // Log the URLs to the console

        res.render('index', {data});

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return; // Exit the function early if an error occurs
    }
}

async function deleteOutfit(req, res) {
    await newURLModel.findByIdAndDelete(req.params.id);
    console.log(req.params)
    res.redirect('/');
  };

  async function update(req, res) {
    try {
        const id = req.params.id;
        const newDescription = req.body.description;
        await newURLModel.findByIdAndUpdate(id, { description: newDescription });
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

  




//USER Story: Adds USERS outfits to its own user DATABASE
