const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET BRO...",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "POST BRO...",
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  if (id === "1") {
    res.status(200).json({
      message: "ANGKA SATU BRO...",
    });
  } else if (id === "2") {
    res.status(200).json({
      message: "ANGKA DUA BRO...",
    });
  } else {
    res.status(200).json({
      message: "GAK KETEMU BRO...",
    });
  }
});

router.put("/", (req, res, next) => {
  res.status(200).json({
    message: "PUT BRO...",
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).json({
    message: "PATHC BRO...",
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "DELETE BRO...",
  });
});

module.exports = router;
