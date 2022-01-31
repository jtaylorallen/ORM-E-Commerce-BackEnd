// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag').default;
// const router = require('ORM-E-Commerce-BackEnd/routes/api/category-routes.js');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  //delete?
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag-id'
});

module.export = {
  Product,
  Category,
  Tag,
  ProductTag,
};
