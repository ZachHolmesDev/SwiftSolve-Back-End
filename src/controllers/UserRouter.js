const express = require('express');
const router = express.Router();

// import functions

// routes 
router.get('/', (request, response) => {
    response.json({
        message : 'Hello World from UserRouter.js'
    });
});

module.exports = router;