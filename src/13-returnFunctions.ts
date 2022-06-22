(()=>{

  const calcTotal = (prices: number[]) : number =>  {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

   const printTotal = (prices: number[]) : void =>{
    const total = calcTotal(prices);
    console.log(`El total es ${total} `);

   }


  printTotal([1,2,3,4,5]);












  })();
