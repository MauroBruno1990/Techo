const User = require("../dbmodels/user")


const userController = {
    create(req,res){
      console.log(req.body)
        User.create(req.body)
        .then((user) => {
            res.status(201).send(user);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
    }
  };
  
  module.exports = userController;