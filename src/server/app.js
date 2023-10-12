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
const admin = require("./config/routes/admin/admin");
const passport = require("passport");
require("./config/routes/auth/passport_config")(passport);

// Configurações
//Sessão
app.use(
  session({
    // "secret": Uma chave secreta usada para assinar os cookies de sessão. Essa chave é usada para evitar que os cookies sejam falsificados.
    secret: "share-books",
    // "resave": Indica se as sessões devem ser salvas novamente no armazenamento, mesmo que não tenham sido modificadas.
    resave: true,
    // "saveUninitialized": Indica se as sessões devem ser salvas mesmo que não tenham sido inicializadas. true significa que sessões vazias também serão salvas.
    saveUninitialized: true,
  })
);
// Inicialização do Passport (autenticação)
app.use(passport.initialize());

// Configuração das sessões do Passport
app.use(passport.session());
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
app.use("/admin", admin);

app.listen(PORT, () => {
  console.log(`Server started successfuly. http://localhost:${PORT}`);
});
