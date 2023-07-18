const Author = require("../models/Author");

const getAuthor = async (req, res) => {
  const { id } = req.params;
  const data = await Author.findById(id);
  res.status(200).json({
    data,
    message: `${req.method} - from Author API`,
    success: true,
  });
};

const getAuthors = async (req, res) => {
  const data = await Author.find();
  res.status(200).json({
    data,
    message: `${req.method} - from Author API`,
    success: true,
  });
};

const createAuthor = async (req, res) => {
  const { author } = req.body;
  const data = await Author.create(author);
  res.status(200).json({
    data,
    message: `${req.method} - from Author API`,
    success: true,
  });
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const data = await Author.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    data,
    message: `${req.method} - from Author API`,
    success: true,
  });
};
const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  await Author.findByIdAndDelete(id);
  res.status(200).json({
    id,
    message: `${req.method} - from Author API`,
    success: true,
  });
};

module.exports = {
  getAuthor,
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
