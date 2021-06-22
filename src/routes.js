const express = require('express');
const routes = express.Router();

const GloboUsersController = require('./controllers/GloboUsersController');
const UserAccessController = require('./controllers/UserAccessController');

// Rota GloboUsers
routes.get('/users', GloboUsersController.read);
routes.post('/users', GloboUsersController.create);
routes.delete('/users/:id', GloboUsersController.delete);
routes.put('/users/:id', GloboUsersController.update);

// Rota Autenticação
routes.post('/login', UserAccessController.login);
routes.post('/logout', UserAccessController.logout);

module.exports = routes;
