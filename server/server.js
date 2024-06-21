require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const connectDb = require("./src/config/mongodb");
const promptRouter = require("./src/routes/prompt.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

connectDb();
app.use("/api/v1/prompt", promptRouter);

app.get("/", (req, res) => {
  res.send("BISMILLAH");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on PORT ${5000}`);
});
