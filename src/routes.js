const express = require("express");
const { login, protectedContent, NomeC, DataNasc } = require("./controllers/authController");

const router = express.Router();

// Rota pública
router.get("/", (request, response) => {
  response.json({ message: "Endpoint que não exige autenticação!" });
});

// Rota de login
router.post("/login", login);

// Rota protegida
router.get("/protected", protectedContent);

router.get("/nomeCompleto", NomeC);

router.get("/dataNasc", DataNasc);



module.exports = router;