const { validateToken } = require("../services/userService")

module.exports = () => async (req, res, next) => {
    //we wait one of the recieved headers to be x-authorization, so that we can handle logout requests
const token = req.headers["x-authorization"]

if (token) {
    try {
        const payload = await validateToken(token)
        
        req.user = {
            email: payload.email,
            _id: payload._id,
            token
        }

    } catch (error) {
        console.log(error);
        return res.status(401).json({message: 'Invalid AccessToken. Please log in!'})
    }
}
    next()
}