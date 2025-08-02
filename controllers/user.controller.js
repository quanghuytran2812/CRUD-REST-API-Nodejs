const { StatusCodes } = require("http-status-codes");
const db = require("../models");
const catchAsync = require("../utils/catchAsync.utils");

// Create a new user
exports.createUser = catchAsync(async (req, res) => {
  const { email, name } = req.body;
  const user = await db.User.create({ email, name });
  res.status(StatusCodes.CREATED).send(user);
});

// Get all users
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await db.User.findAll();
  res.status(StatusCodes.OK).send(users);
});

// Get a user by ID
exports.getUserById = catchAsync(async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
  }
  res.status(StatusCodes.OK).send(user);
});

// Update a user by ID
exports.updateUser = catchAsync(async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
  }
  await user.update(req.body);
  res.status(StatusCodes.OK).json(user);
});

// Delete a user by ID
exports.deleteUser = catchAsync(async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
    }
    await user.destroy();
    res.status(StatusCodes.NO_CONTENT).send();
});
