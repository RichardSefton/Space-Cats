const { login } = require("../../controllers/authentication/loginController");
const { logout } = require("../../controllers/authentication/logoutController");
const router = require("express").Router();
const { signup } = require("../../controllers/authentication/signupController");
const { userVerification } = require("../../middleware/userMiddleware");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// GET ROUTES
router.get("/logout", logout);

// POST ROUTES
router.post("/signup", signup);
router.post("/login", login);
router.post("/dashboard", userVerification);

module.exports = router;
