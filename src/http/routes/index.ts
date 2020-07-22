import express from 'express';
const middleware = require("../middleware");
const router = express.Router();

/**
 * Authentication
 */
let authController = require('../controllers/authController');

router.get('/', (request, response, next) => {
    return response.json({
        "success": true,
        "version": 0.1
    })
});

router.post('auth/login', authController.login);
router.post('auth/register', middleware.checkToken, authController.register);

module.exports = router;