module.exports = app => {
    const test = require("../controllers/tests.controller.js");
    var router = require("express").Router();
    // Retrieve all test
    router.get("/test/list", test.findAll);
    router.post("/test/create",test.create)
    router.put("/test/update/:id",test.update)
    router.delete("/test/delete/:id",test.delete)
    router.get("/test/:id",test.findOne)
    app.use('/api', router);
  };