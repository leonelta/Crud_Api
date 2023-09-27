const express = require("express");
const router = express.Router();
const { getUser, createUser, getAllUser, updateUser, deleteUser} = require("../controllers/userController")

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;