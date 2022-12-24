const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const { verifyToken } = require('../../services/token.service');

const router = express.Router();
const freeMiddleWare = async (req, res, next)  => {
 next()
}
const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
    middleWare: freeMiddleWare
  },
  {
    path: '/users',
    route: userRoute,
    middleWare: verifyToken
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.middleWare, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
