module.exports = {
    new: newURL,

};

// Define a route that renders the 'newURL' view
function newURL(req, res, next) {
  res.render('newURL');
};

// function create(req, res, next) {
// })