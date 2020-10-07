/* global require, process */

const jsonServer = require('http-server');
const server = jsonServer.create();
const router = jsonServer.router('http-server dist');
const middlewares = jsonServer.defaults({
  static: 'dist',
  noCors: true,
});
const port = process.env.PORT || 3131;

server.use(middlewares);
server.use(router);

server.listen(port);