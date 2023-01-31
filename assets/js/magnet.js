var x = document.getElementById("isitujuan");
var xx= document.querySelector('.isitujuan');
var x1 = document.getElementById("petunjuk");
var xx1= document.querySelector('.petunjuk');
var x2 = document.getElementById("petunjuk2");
var xx2= document.querySelector('.petunjuk2');
var x3 = document.getElementById("petunjuk3");
var xx3= document.querySelector('.petunjuk3');
xx.addEventListener("click",function(){
  x.classList.toggle("hilang");
})
xx1.addEventListener("click",function(){
	x1.classList.toggle("hilang");
  })
  xx2.addEventListener("click",function(){
	x2.classList.toggle("hilang");
  })
  xx3.addEventListener("click",function(){
	x3.classList.toggle("hilang");
  })

let jjj = document.querySelector(".jjj");
let btn =document.querySelector(".btn");
btn.addEventListener("click", function(){
	console.log("ok")
	jjj.classList.toggle("hilang");
} );