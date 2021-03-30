const User = require("../dbmodels/user");

const userController = {
  create(req, res) { 
    // buscar si existe el usuario por ID
    User.create(req.body)
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  update(req, res) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((user) => res.send(user).status(200))
      .catch((e) => res.send(e).status(500));
  },
};

/// crear update para modificar datos de un usuario ya registrado



module.exports = userController;
