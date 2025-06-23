<<<<<<< HEAD
// const arr = ["cat","dog","elephant","tiger","lion"]

// for(let i in arr){
//   const ele = arr[i];
//   console.log(ele,i)
// }

// for(let i of arr){
//   console.log(i)
// }


// arr.forEach(myfun);

// function myfun(i){
//   let count=0;
//   for(let i of arr){
//     count++;
//   }
//   console.log(count);
// }

=======
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
>>>>>>> 0903dc49da51e75799fc6a4308e93acc402c4c95

