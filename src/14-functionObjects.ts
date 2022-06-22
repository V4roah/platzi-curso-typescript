(()=>{

  type Sizes = "S" | "M"| "L" | "XL";
  type Product = {
    title : string,
    createAt : Date,
    stock : number,
    size? : Sizes
  }



  const products : Product[] = [];

  const addProduct = (data : Product ) => {
    products.push(data);

  }

  addProduct({
    title: "product 1",
    createAt: new Date(),
    stock: 123
  });

  addProduct({
    title: "product 2",
    createAt: new Date(),
    stock: 123512
  });


  console.log(products);














  })();
