var express = require('express');
var router = express.Router();
const newURLModel = require('../models/newURL.js');

module.exports = {
    index
}


//USER STORY: Renders Home Page
async function index(req, res, next) {
    let urls;
    try {
        // Find all documents in the collection
        const data = await newURLModel.find({});
    
        // using Map to get just the URLs from the data
        urls = data.map(item => item.imageUrl);

        // Log the URLs to the console
        console.log(urls);

        res.render('index', {urls});

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return; // Exit the function early if an error occurs
    }

    // Exporting the urls array
    module.exports.urls = urls;
}

//USER Story: Adds USERS outfits to its own user DATABASE






