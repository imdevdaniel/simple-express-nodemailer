const express = require("express");
const router = express.Router();
const sendMailMethod = require("../src/send-mail");

router.post("/sendmail", async (req, res) => {
  try {
    const result = await sendMailMethod(req.body);

    res.json({
      status: true,
      payload: result,
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: false,
      payload: "Something went wrong in Sendmail Route.",
    });
  }
});

module.exports = router;
