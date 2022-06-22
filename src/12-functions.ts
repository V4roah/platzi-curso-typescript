(()=>{

  type Sizes = "S" | "M"| "L" | "XL";
  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson("P1", new Date(), 12, "XL");
  console.log(producto1)
  console.log(producto1.createAt)
  console.log(producto1.title)

  const createProductToJsonv2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto12 = createProductToJsonv2("P1", new Date(), 12);




  })();
