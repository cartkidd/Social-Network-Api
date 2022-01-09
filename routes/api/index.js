const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add users and thoughts to the beginning of their respective routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;