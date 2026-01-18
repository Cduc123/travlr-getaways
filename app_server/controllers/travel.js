const travelList = (req, res) => {
  res.render('travel-list', {
    title: 'Travlr Getaways',
    pageHeader: {
      title: 'Travlr Getaways',
      strapline: 'Enjoy your dream vacation with us!'
    },
    trips: [
      { destination: 'Hawaii', duration: '7 nights', price: '$1,200' },
      { destination: 'Bali', duration: '5 nights', price: '$950' },
      { destination: 'Paris', duration: '6 nights', price: '$1,300' }
    ]
  });
};

module.exports = { travelList };
