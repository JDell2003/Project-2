const newUrlModel = require('../models/newURL')
module.exports = {
    new: newURL,
    create,
};

// Define a route that renders the 'newURL' view
function newURL(req, res, next) {
  res.render('newURL');
};

// function create(req, res, next) {
// })

async function create(req, res) {
  try {
      const newUrl = await newUrlModel.create(req.body);
      console.log('New URL created:', newUrl); // Check if new URL is created
      res.redirect('/');
      console.log('Redirected to /'); // Check if redirection is attempted
  } catch (err) {
      console.log(err);
      res.render('newURL', { errorMsg: err.message });
  }
}