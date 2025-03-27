import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Função para checagem da autenticação
const Authorization = (req, res, next) => {
  // Coletar o token do cabeçalho da requisição
  const authToken = req.headers["authotization"];
  if (authToken != undefined) {
    // Dividindo o token
    const bearer = authToken.split(" "); //Cria a divisão aonde tiver um espaço
    const token = bearer[1]; // Pega o indice um, que é o token

    //  Validando o token
    jwt.verify(token, userController.JWTSecret, (error, data) => {
      // Token inválido
      if (error) {
        res.status(401).json({ error: "Token inválido. Não autorizado." });
        // Token válido
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Token inválido." });
  }
};

export default { Authorization };
