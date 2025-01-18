const app = require('./app'); // Import the app
const config = require('./config/appConfig'); // Import the appConfig

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
