const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

require("../../models/User");
const User = mongoose.model("User");

module.exports = function (passport) {
  // Utilizando a estratégia Local
  passport.use(
    // Recebendo o valor do email na chave usernameField
    new localStrategy({ usernameField: "email" }, (email, password, done) => {
      // Verificando se existe um usuário com o email passado
      User.findOne({ email: email }).then((user) => {
        // Caso não exista será mostrado uma mensagem de erro
        if (!user) {
          return done(null, false, { message: "Email not registered" });
        }
        // Se existir, será comparado a senha passada pelo usuário com a senha que consta no banco de dados
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          // Se a senha passada bate com senha do banco de dados, será retornado o usuário
          if (isMatch) {
            return done(null, user); // Senha correta e usuário autenticado
          } else {
            // Caso não bate com a senha do banco de dados, será mostrado uma mensagem de erro, e será passado o valor false com segundo argumento para done
            return done(null, false, { message: "Incorrect password!" });
          }
        });
      });
    })
  );

  // Se tudo estiver correto, será armazenado na sessão do usuário
  passport.serializeUser((user, done) => {
    // Armazenando na sessão apenas o ID do usuário
    done(null, user.id);
  });

  // Aqui estamos desserializando o usuário, fazendo a busca com base no id armazenado na sessão
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => done(null, user))
      .catch((err) =>
        done(err, false, {
          message: "Something went wrong when searching for the user!",
        })
      );
  });
};
