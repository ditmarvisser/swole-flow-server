import express from 'express';
import path from 'path';

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
router.post('auth/register', [middleware.checkToken], authController.register);

router.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')); })
module.exports = router;