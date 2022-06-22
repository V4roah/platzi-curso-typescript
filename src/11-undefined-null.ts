(()=>{
let myNumber : number;
let myString : string;

function hi(name: string | null) {
  let hello = "Hola ";
  if (name) {
    hello += name.toLowerCase();
  }else {
  hello += 'nobody';
  console.log(hello);
  }
}
function hiv2(name: string | null) {
  let hello =  "Hola";
  hello + name?.toLowerCase () || 'nobody';
  console.log (hello) ;

}


})();
