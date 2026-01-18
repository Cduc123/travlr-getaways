const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Register HBS as the view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Register routes
const travelRouter = require('./app_server/routes/travel');
app.use('/', travelRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Travlr Getaways MVC app running at http://localhost:${PORT}`);
});
