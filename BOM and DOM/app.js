// console.log(window);
// console.log(window.document);
// console.dir(window.document);
// console.log(document.children[0].children[1].children[0])


// //1. document.getElement_s_ByTagname --> [](iterable) (HTML Collection)

// // const headings = document.getElementsByTagName("h1");
// // console.log("headings:",headings)

// const headings = document.getElementsByTagName("h3");
// console.log("headings: ",headings);

// const header = document.getAnimations("header");
// console.log("header:",header);

// headings[0].innerText = "hello Rishabh";
// headings[1].innerText = "Hello mohot";

// const headings = document.getElementsByClassName("text-brown");
// console.log("elements: ", elements);

// elements[0].style.color = "brown";
// elements[1].style.color = "brown";


// //3. document.getElemetsById ->> elemts or null

// const text = document.getElementById("text-1");
// text.style.backgroundColor = "lime";


// // const title = document.querySelectorAll("h3");
// // console.log("titles: ",title);

// const textBrownElemets = document.querySelectorAll(".text-brown");
// console .log("textBrownElements:",txtBrownElements);

// console.assert.log("textPara:",textParas);




// const parent = document.getElementById("root");
// const title = document.createElement("h1");
// title.innerText = "Hello subho";
// title.style.textDecoration = "underline";
// title.style.textDecorationColor = "magenta";

// parent.append(title)

// const title2 = document.createElement("h1");
// title2.innerText = "Hello deep";
// parent.append(title2)

//  =========================================================
//============================================================

console.log("window", window);

console.log(window.document);
console.dir(window.document.children[0].children[1].children[0].innerHTML);

// // ----------------------------------------------------
// // 1. document.getElement_s_ByTagName --> [ ] (iterable) (HTML Collection)

const headings = document
.getElementsByTagName("h3");
console.log("headings:", headings);

const header = document
.getElementsByTagName("header");
console.log("header:", header);

headings[0].innerText = "Hello Rishabh!";
headings[1].innerText = "Hello Mohan!";

// // ----------------------------------------------------
// // 2. document.getElement_s_ByClassName --> [ ] (iterable) (HTML Collection)

const elements = document.getElementsByClassName("text-brown");
console.log(" elements:", elements);

elements[0].style.color = "brown";
elements[1].style.color = "brown";

// // // ----------------------------------------------------
// // // 3. document.getElementById --> element or null

const text = document.getElementById("text-1");

text.style.backgroundColor = "lime";

// // ----------------------------------------------------
// // 4. document.querySelectorAll --> [] (NODE LIST)

const titles = document.querySelectorAll("h3");
console.log("🟡 : titles:", titles);

const textBrownElements = document.querySelectorAll(".text-brown");
console.log("🟡 : textBrownElements:", textBrownElements);

const textParas = document.querySelectorAll("#text-1");
console.log("🟡 : textPara:", textParas);

// // ----------------------------------------------------
// // 5. document.querySelector --> element or null

const title = document.querySelector("h3");
console.log("🟡 : title:", title);

const textBrownElement = document.querySelector(".text-brown");
console.log("🟡 : textBrownElements:", textBrownElement);

const textPara = document.querySelector("#text-1");
console.log("🟡 : textPara:", textPara);

const textPara2 = document.querySelector("#text-2");
console.log("🟡 : textPara2:", textPara2);