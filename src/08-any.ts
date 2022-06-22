(()=>{

  let myDynamicVar: any
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {}
  myDynamicVar = "";

  myDynamicVar = "Hola";
  const rta = (myDynamicVar as string).toLowerCase() ;

  const rta2 = (<number>myDynamicVar).toFixed();




})();
