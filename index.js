const express = require("express");
const cors = require("cors");
const bookRouter = require("./router/bookRouter");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello! Server is running ✅");
});

app.use("/books", bookRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
