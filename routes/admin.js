const { Router } = require("express");
const adminRouter = Router();
const { adminRole } = require("../db");

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "Admin Signup endpoint",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "Admin signin endpoint",
  });
});

adminRouter.post("/", (req, res) => {
  res.json({
    message: "Admin signin endpoint",
  });
});

adminRouter.put("/", (req, res) => {
  res.json({
    message: "Admin signin endpoint",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Admin signin endpoint",
  });
});

module.exports = {
  adminRouter,
};
