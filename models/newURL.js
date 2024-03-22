const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const urlSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
    

const URLModel = mongoose.model('URL', urlSchema);

module.exports = URLModel;