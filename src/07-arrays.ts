(() =>{
  let prices = [1,32,5,1,2,3,5,1]

  prices.push(12);

  let products = ["Hola", false];
  // products.push(2);

  let mixed : (number | string | boolean | object)[] = ["Hola", false];
  mixed.push(2);
  mixed.push("asd");
  mixed.push(true);
  mixed.push([]);
  mixed.push({});

  let numbers = [1,3,6,7,8,2,3,10];
  let newArray = numbers.map(item => item + 2);
  console.log(newArray);








})();
