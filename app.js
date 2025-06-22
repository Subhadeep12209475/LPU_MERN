// const printbill= function(txt){
//   console.log("--------------");
//   console.log("rs",txt);
//   console.log("--------------");
// }

//arrow function 
const printbill = (txt) => {
  console.log("--------------");
  console.log("rs", txt);
  console.log("--------------");
}

const printbillorfood = (txt) => {
  console.log("--------------");
  console.log("rs", txt);
  console.log("--------------");
}
const printbillorfoodanddrinks = (txt) => {
  console.log("--------------");
  console.log("rs", txt);
  console.log("--------------");
}


const calculatebillforfood = (price) => {
  return price + price * 0.05;
}
const calculatebillforcloths = (price) => {
  return price + price * 0.12;
}
const calculatebillfordrinks = (price) => {
  return price + price * 0.12;
}

const totalbill = (food, cloth, drinks) => {
  const total = calculatebillforfood(food) + calculatebillforcloths(cloth) + calculatebillfordrinks(drinks);
  printbill(total);
}
totalbill(10, 20, 30);

