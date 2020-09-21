const express = require('express');
const router = express.Router();
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
  const token = jwt.sign(payload, app.get('llave'), {
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


module.exports = router;