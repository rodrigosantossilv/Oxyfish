const express = require('express')

const UsuarioRepository = require("./repositories/usuarioRepository")
const UsuarioApplication = require("./applications/usuarioApplication")
const UsuarioFacade = require("./facade/usuarioFacade")

const usuarioRepository = new UsuarioRepository();
const usuarioApplication =  new UsuarioApplication(usuarioRepository);
const usuarioFacade = new UsuarioFacade(usuarioApplication);

const app = express()
const port = 3000

app.get("/api/usuario", async (req, res) => {
  let usuario = await usuarioFacade.getAll();
res.json(usuario);
})

app.get('/aaaa', (req, res) => {
    res.json( {teste: "Hello World!" })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

