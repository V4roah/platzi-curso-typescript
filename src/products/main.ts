import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: "product 1",
  createAt: new Date(),
  stock: 12000
});

addProduct({
  title: "product 2",
  createAt: new Date(),
  stock: 54000,
  size: "M"
});

console.log(products);
const total = calcStock();
console.log(total);


