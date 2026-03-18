const express = require("express");
const cors = require("cors");
require("dotenv").config();

const walletRoutes = require("./routes/wallet");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/wallet", walletRoutes);

app.get("/", (req, res) => {
  res.send("WalletTown API Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
