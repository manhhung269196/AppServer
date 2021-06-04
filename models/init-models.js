var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _products = require("./products");
var _tests = require("./tests");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var tests = _tests(sequelize, DataTypes);

  products.belongsTo(categories, { foreignKey: "category_id"});
  categories.hasMany(products, { foreignKey: "category_id"});

  return {
    categories,
    products,
    tests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
