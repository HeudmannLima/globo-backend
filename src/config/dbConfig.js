const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://usuario:usuario2020@cluster0.tddun.mongodb.net/userdata?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
