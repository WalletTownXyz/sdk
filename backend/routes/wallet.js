const express = require("express");
const router = express.Router();

const {
  getWallet,
  deposit,
  withdraw
} = require("../controllers/walletController");

router.get("/", getWallet);
router.post("/deposit", deposit);
router.post("/withdraw", withdraw);

module.exports = router;
