const fs = require('fs');
const path = require('path');

// Correct path to JSON model
const tripsFile = path.join(__dirname, '../../data/trips.json');

// Helper function to read JSON
const getTrips = () => {
  const data = fs.readFileSync(tripsFile, 'utf-8');
  return JSON.parse(data);
};

const travelList = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    pageHeader: {
      title: 'Travlr Getaways',
      strapline: 'Enjoy your dream vacation with us!'
    },
    trips: getTrips()
  });
};

module.exports = { travelList };
