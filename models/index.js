// import models
import Product, { belongsTo, belongsToMany } from './Product';
import Category from './Category';
import Tag, { belongsToMany as _belongsToMany } from './Tag.js';
import ProductTag from './ProductTag';
// const router = require('ORM-E-Commerce-BackEnd/routes/api/category-routes.js');

// Products belongsTo Category
belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
_belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag-id'
});

export default {
  Product,
  Category,
  Tag,
  ProductTag,
};
