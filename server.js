const app = require('./lib/app');
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
