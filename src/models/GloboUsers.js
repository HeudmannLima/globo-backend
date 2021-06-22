const mongoose = require('mongoose');

const GloboUsersDataSchema = new mongoose.Schema({
  email: String,
  senha: String,
  nivel_acesso: String,
});

module.exports = mongoose.model('GloboUsers', GloboUsersDataSchema);