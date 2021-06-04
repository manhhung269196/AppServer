const db = require("../models");
const Model = db.initModels;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const NewObject = {
    code: req.body.code,
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    created_at: Date.UTC(+7),
    created_by: 'admin'
  }

  Model.tests.create(NewObject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Xảy ra lỗi trong quá trình xử lý"
      });
    });

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Model.tests.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Model.tests.findByPk(id)
    .then(data => {
      if(data == null)
      {
        res.send("Result Empty !!!");
      }
      else
      {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Model.tests.update(req.body,
    {
      where: {
        id: id
      }
    })
    .then(data => {
      //data -> number == 1 -> update success || != 1 -> Update false
      if (data == 1) {
        res.send(req.body);
      }
      else {
        res.send({ message: "Update Faild: Not Found Item Update Or Data Update Empty" });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Model.tests.destroy({
    where: {
      id: id
    }
  })
    .then(data => {
      //data -> number == 1 -> update success || != 1 -> Update false
      if (data == 1) {
        res.send({ id,message: "Delete Successfully" });
      }
      else {
        res.send({ message: "Not Found Item Delete" });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
