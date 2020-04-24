const {Router} = require('express');
const Events = require('./services/Events')
const {handleError} = require('./helpers/Error')
const { eventInputValidationRules, validate } = require('./models/validator/EventValidator')
const routes = Router();

routes.put('/events', eventInputValidationRules(),validate, Events.save);
routes.patch('/events/:id', Events.update);
routes.delete('/events', Events.delete);
routes.get('/events', Events.list);
routes.get('/events/:id', Events.view);

routes.use((err, req, res, next) => {
    handleError(err, res);
  });

module.exports = routes;