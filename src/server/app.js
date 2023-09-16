const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 8081;
const categories = require("./config/routes/Categories/categories");
const posts = require("./config/routes/Posts/posts");
const auth = require("./config/routes/auth/auth");
const user = require("./config/routes/user/user");

app.use(
  session({
    secret: "app-books",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongoose

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/appbooks")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB " + err);
  });

app.get("/", (req, res) => {
  res.send("Rodando");
});

app.use("/categories", categories);
app.use("/posts", posts);
app.use("/api/auth", auth);
app.use("/return/user/", user);

app.listen(PORT, () => {
  console.log(`Server started successfuly. http://localhost:${PORT}`);
});
