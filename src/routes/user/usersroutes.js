const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const rutasProtegidas = require('../../lib/rutasProtegidas');
const config = require('../../config/config');
//const { check, validationResult } = require('express-validator');
//const userController = require('../../controllers/userscontroller');
//app.express();





router.get('/prueba', function(req, res) {
    res.send('Inicio');
});


router.post('/autenticar', (req, res) => {
    if(req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
  const payload = {
   check:  true
  };
  const token = jwt.sign(payload, config.llave, {
   expiresIn: 1440
  });
  res.json({
   mensaje: 'Autenticación correcta',
   token: token
  });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
});


router.get('/datos', rutasProtegidas, (req, res) => {
    const datos = [
     { id: 1, nombre: "Asfo" },
     { id: 2, nombre: "Denisse" },
     { id: 3, nombre: "Carlos" }
    ];
    
    res.json(datos);
   });

module.exports = router;