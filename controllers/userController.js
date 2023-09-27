const asyncHandler = require("express-async-handler")
const Users = require("../models/userModel")

const getAllUser = asyncHandler(async(req, res) => {
    const users = await Users.find();
    res.status(200).json(users);
});

const createUser = asyncHandler(async(req, res) => {
    console.log("The request body is :", req.body)
    const { name, email } = req.body;
    if (!name || !email){
        res.status('400');
        throw new Error("All fields are mandatory")
    }
    const user = await Users.create({
        name, 
        email,
    });
    res.status(201).json(user);
});

const getUser = asyncHandler(async(req, res) => {
    const user = await Users.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not Found")
    }
    res.status(200).json(user);
});

const updateUser = asyncHandler(async(req, res) => {
    const user = await Users.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not Found")
    }

    const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedUser);
})

const deleteUser = asyncHandler(async(req, res) => {
    const user = await Users.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not Found")
    }

    await Users.remove();
    res.status(200).json(user);
})

module.exports = { getUser, createUser, getAllUser, updateUser, deleteUser };