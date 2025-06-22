// const arr = ['tata','polo','suzuki0','hyundai']
// console.log(arr[1])
//const [a,b,c]=arr


//ADD
// arr[10]="bmw";
// console.log(arr);

// arr.push("Honda");
// arr.shift();
// console.log(arr);
// arr.unshift("Thar");
// console.log(arr);

// arr.splice(1,3,"kia","byd","honda"); // removing and adding elements
// console.log(arr);
// arr.splice(1,2)  // remove
// console.log(arr);
// arr.splice(1,0,"johndeer") //adding new element
// console.log(arr);

// console.log(arr.indexOf("tata"))


// const arr=[
//   {name1 : "SUbhadeep",roll1: "12"},
//   {name2 :"aashif", roll2: "14"},
//   {name3: "suman", roll3: "15"}

// ];

// console.log(arr.indexOf({name2 :"aashif", roll2: "14"}));
// console.log(arr.indexOf({name2 :"aashif", roll2: "12"}));

// if({name:"Raj"}== {name:"raj"}){
//   console.log("T");
// }else{
//   console.log("F");
// }
//   const person1={name:"Subha"};
//   const person2 = {...person1};
//   if(person1==person2){
//     console.log("T");
//   }else{
//   console.log("F");
// }


// const arr =["ab","xy","mn","ab"];
// console.log(arr.lastIndexOf("ab"))

const arr1=[{name1:"Likhilesh",city1:"Delhi", score:34},
            {name1: "Subhadeep",city1:"kolkata", score:32},
            {name1:"Akash", city1:"Pune", score: 31}
];

const myfun=(a)=>{
  if(a.name1==="Akash") return true;
  return false;
};
const ans=arr1.find(myfun);
console.log(ans);

const myfun2= (ele)=>{
  if(ele.score < 25){
    return {...ele,remark: "fail"};

  }else{
    return {...ele,remark: "pass"};
  }
};

const resarr = arr1.map(myfun2);
console.log(resarr)



