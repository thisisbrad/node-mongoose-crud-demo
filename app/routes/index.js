const router = require("express").Router();
const authorRoutes = require("./authorRoutes");

router.get("/", (req, res) => {
  res.status(200).json({
    message: `${req.method} - from API`,
    success: true,
  });
});

router.use("/authors", authorRoutes);

module.exports = router;
