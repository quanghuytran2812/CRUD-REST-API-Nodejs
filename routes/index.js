const router = require('express').Router()
const userRouters = require("./user.route");

/** Users APIs */
router.use('/users', userRouters)

module.exports = router
