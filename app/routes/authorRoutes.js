const router = require("express").Router();
const {
  getAuthor,
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

// localhost:3000/api/v1/authors
router.get("/", getAuthors);

router.get("/:id", getAuthor);

router.post("/", createAuthor);

router.patch("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
