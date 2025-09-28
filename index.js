const express = require("express");
const bookRouter = require("./router/bookRouter");

const app = express();
app.use(express.json());

app.use("/books", bookRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
