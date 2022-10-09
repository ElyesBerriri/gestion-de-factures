const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/Auth.Controller')


router.post('/login', AuthController.login)




router.post('/register',AuthController.register)



router.post('/refresh-token', AuthController.refreshToken)

router.delete('/logout', AuthController.logout)

module.exports = router