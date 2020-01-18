const { Router } = require('express');
const PlayerController = require('./controllers/PlayerController');

const routes = Router();

routes.get('/players', PlayerController.index);
routes.post('/players', PlayerController.store);

module.exports = routes;