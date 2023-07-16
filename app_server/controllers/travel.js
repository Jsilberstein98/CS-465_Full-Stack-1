const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

//Traveler View
const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
};