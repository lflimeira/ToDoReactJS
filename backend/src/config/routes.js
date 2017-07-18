const express = require('express');

module.exports = function(server) {
	// API Routes
	const router = express.Router();
	server.use('/api',router);

	//Tasks Routes
	const tasksService = require('../api/tasks/tasksService');
	tasksService.register(router, '/tasks');

}
