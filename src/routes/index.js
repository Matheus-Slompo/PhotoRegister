const { Router } = require('express');
const photoRoutes = require('./photo.routes');

const routes = Router();

routes.use('/photos', photoRoutes);

module.exports = routes;
