import { Router } from "express";

const router: Router = Router();

router.post("/login", (req, res) => {
  res.json({
    message: "Login successful",
  });
});

router.post("/register", (req, res) => {
  res.json({
    message: "Registration successful",
  });
});

export default router;
