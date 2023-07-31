import productController from "./productController.js";

export default class ProductForm {
  constructor() {
    this.productController = productController;
    this.product = {};
  }

  onSubmit() {
    const product = this.product;
    this.productController.addProduct(product);
  }
}