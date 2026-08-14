// console.log("HELLO");
let num = Math.random()*10+1;
let randomNum =Math.floor(num);

console.log(randomNum);

function btnGuessNumberOnAction() {
    Swal.fire({
  title: "Custom width, padding, color, background.",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cXA4d3dpeTU4bDVxdHBzbHB6dml0N3d4bzlwaXhydGtyZ3Y3bGlwbiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/VXS7y6lz5ZEI0W7ZOB/giphy.webp")
    left top
    no-repeat
  `
});
    alert("haii");
}

//------------------------------------------------------------------------------------------------------
// let
// var
// const

//var vs let-----------------------------------------------------------------------------------------------

{
  var studentName ="HUSH";
  // var age = 18 ; var aknm {} athulema console.log(); aka dann oni
  
  let age =18;
  console.log(age);

  var address ="Horana";
  console.log(address);
  var salary = 4567898;
  console.log(salary);
  

}


console.log(studentName);

// console.log(age);


//---------------------------------------------------------------------------------------------


// const------------------------------------------------------------------------------------------------------------------

// const customerList = [];

// customerList.push("HUSH");

// console.log(customerList);

// customerList = "HUSH"

// console.log(typeof customerList);

//Array methods-------------------------------------------------------------------------------------------------------------

// const customerList = [];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);
// customerList.push(4);

// let revAr = customerList.reverse();

// console.log(revAr);

//----------------------------------------------------------------------------------------------------------------------

const products = [
  {name: "bus", inStock : true},
  {name: "car", inStock : false},
  {name: "van", inStock : true},
  {name: "train", inStock : true},
];

// let inStockItems = products.filter(product => product.inStock ==true);

let inStockItems = products.filter(function (product) {return productFilter(product)})
  
function productFilter(product) {
   return product.inStock==false;
}

console.log(inStockItems);
