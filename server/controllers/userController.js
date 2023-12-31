const router = require("express").Router();
const userService = require("../services/userService");
const mongooseErrorMapper = require('../utils/mongooseErrorMapper')

router.post("/login", async (req, res) => {
  const {email, password} = req.body;

  try {
   const newUser = await userService.login(email, password)
   res.json(newUser)
  } catch (error) {
    const errorMsg = mongooseErrorMapper(error);
    res.status(404).json({ message: errorMsg });
  }
});
router.post("/register", async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await userService.register(userData);
    res.json(newUser);
  } catch (error) {
    const errorMsg = mongooseErrorMapper(error);
    res.status(404).json({ message: errorMsg });
  }
});
router.get('/logout', (req, res) => {
    //token will be blacklisted!
    userService.logout(req.user.token)
    res.status(204).end()
})
router.get("/:id", async (req, res) => {
  try {
    const user = await userService.findUser(req.params.id)

    res.json(user)
  } catch (error) {
    const errorMsg = mongooseErrorMapper(error);
    res.status(404).json({ message: errorMsg });
  }

})
module.exports = router;
