function cek1_6cs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Meja ketika didorong akan ke arah depan, karena gaya dorong membuat benda yang didorong mengarah kedepan
                            </div>`;
}

function cek1_6cs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            ${salah}<br>
                            <div class="pembahasan2">
                          
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek1_6cs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Muatan listrik yang sejenis akan saling tolak-menolak
                            </div>`;
}

function cek1_6cs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${salah}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
function ftampil(){
	/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active2");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}

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



