'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    articles = require('./controllers/articles'),
    addictions = require('./controllers/addictions');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes

  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.get('/api/articles', articles.all);
  app.post('/api/articles', articles.create);
  app.put('/api/articles', articles.update);
  app.get('/api/articles/:id', articles.show);
  app.del('/api/articles/:id', articles.destroy);

  app.post('/api/addictions', addictions.create);
  app.put('/api/addictions', addictions.update);
  app.get('/api/addictions/:id', addictions.show);
  app.del('/api/addictions/:id', addictions.destroy);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};