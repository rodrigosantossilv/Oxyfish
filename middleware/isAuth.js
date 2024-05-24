// middleware/isAuth.js

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "Não está autenticado" });
  }

  const token = authHeader.split(" ")[1];
  let tokenDecodificado;

  try {
    tokenDecodificado = jwt.verify(token, "minha_chave_secreta");
  } catch (err) {
    return res.status(500).json({ error: "Falha na autenticação" });
  }

  if (!tokenDecodificado) {
    return res.status(401).json({ error: "Não está autenticado" });
  }

  req.idUsuario = tokenDecodificado.idUsuario;

  next();
};
