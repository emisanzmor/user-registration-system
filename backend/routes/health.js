const { Router } = require("express");
const router = Router();

// Health check endpoint to verify service avaibility
router.get("/", (req, res) => {
  res.json({
    service: "user-registration",
    status: "ok",
    timestamp: Date.now(),
    message: "API is running",
  });
});

module.exports = router;
