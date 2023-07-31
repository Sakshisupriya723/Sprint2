import products from "./product.js";

export default class ProductController {
  constructor() {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product) {
    this.products.push(product);
  }

  updateProduct(product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
  }

  deleteProduct(id) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }
}