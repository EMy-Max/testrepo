let f;
let l;
let age;
document.getElementById("mybtn").onclick = function(){
  let f = document.getElementById("fName").value;
  let l = document.getElementById("lName").value;
  let age = document.getElementById("age").value;

  document.getElementById("output").innerHTML = "Welcome, " + f + " " + l + ", you are " + age + " years old.";

}

let a;
let b;
let c;
document.getElementById("div").onclick = function() {
  let a = document.getElementById("fNum").value;
  let b = document.getElementById("sNum").value
  let c = Number(a) / Number(b);

  document.getElementById("result").innerHTML = c;
}


document.getElementById("mult").onclick = function() {
  let a = document.getElementById("fNum").value;
  let b = document.getElementById("sNum").value
  let c = Number(a) * Number(b);

  document.getElementById("result").innerHTML = c;
}