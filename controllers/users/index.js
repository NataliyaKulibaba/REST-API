const signup = require('./signup');
const login = require('./login')
const currentUser = require("./currentUser")
const logout = require("./logout")
const updateSubscriptionOfUser = require('./updateSubscriptionOfUser')
const updateAvatar = require("./updateAvatar")
const verifyEmail = require("./verifyEmail")

module.exports = {
    signup,
    login,
    currentUser,
    logout,
    updateSubscriptionOfUser,
    updateAvatar,
    verifyEmail
}