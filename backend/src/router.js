const router = require("express").Router();
const data = require("./oh-my-brew.json");

router.get("/", (req, res) => {
  res.status(200).send(data);
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .send(data.filter((beer) => beer.id.toString() === req.params.id));
});

router.get("/image/:filename", (req, res) => {
  res.sendFile(`./public/images/${req.params.filename}`, { root: "./" });
});

module.exports = router;
