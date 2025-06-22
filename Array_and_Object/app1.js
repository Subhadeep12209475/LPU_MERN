// const cse018={
//   name: "Subhadeep",
//   address: "Kolkata, WB",
//   bloodGroup: "0-"
// };
// console.log(cse018.name);


// const cse075={
//   name: "Aashif",
//   address: "Badshapur, UP ",
//   bloodGroup: "0+"
// };

// //print the value
// console.log(cse075.name);

// //update the value of property
// cse018.bloodGroup="O+";
// console.log(cse018.bloodGroup);

// //add a key-value pair
// cse018.College="LPU";
// console.log(cse018.College);

// //delete the property

// delete cse018.address;

// console.log(cse018.address);


// const person ={
//   name : "Subhadeep",
//   height: "2",
//   weight: "77",
//   college:"LPU",
//   roll: "18",
//   getBMI: function(){
//     const bmi = this.weight/this.height **2;
//     console.log(bmi); //height and weight\

//     if(bmi <=18.5){
//   console.log("Under");
// }
// else if(bmi>18.5 && bmi<=25){
//   console.log("Normal");
// }
// else{
//   console.log("Over");
// }
//   }
// };


// person.getBMI();


// person.weight= 100;
// person.getBMI();


// const allkeys = Object.keys(person);
// console.log("allkeys: ", allkeys);

// const allvalues = Object.values(person);
// console.log("allvalues: ",allvalues);

// const allEntries = Object.entries(person);
// console.log("allEnties: ",allEntries);


// const person2 = person;

// person.name = 'sanskar';

// console.log("person1: ",person);
// console.log("Person2: ",person2);


// // De- structuring 

// const {weight,college } = person;
// console.log(weight,college);

// const person3 = {...person};
// person3.name= "aashif";


// console.log(person.name);
// console.log(person3.name);


