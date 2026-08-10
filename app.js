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
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
});
    alert("haii");
}