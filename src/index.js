require('dotenv').config();
require('./config/dbConfig');

const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.debug("GLOBO Backend Server")
});
