const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

//------------
function cekbergerakdiamcs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                             Benda bergerak merupakan salah satu bentuk dari pengaruh gaya terhadap benda. Seperti kelereng dan bola mainan yang diberikan gaya dorong berupa dorongan atau sentilan akan bergerak dan melaju. 
                            </div>`;
}


function cekbergerakdiamcs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cekbergerakdiamcs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       bergerak merupakan salah satu bentuk dari pengaruh gaya terhadap benda. 
                       Seperti kelereng dan bola mainan yang diberikan gaya dorong berupa dorongan 
                       atau sentilan akan bergerak dan melaju. Sebaliknya benda yang bergerak dapat 
                       diam ketika mendapatkan gaya. 
                       Seperti kelereng dan bola mainan akan berhenti bergerak jika ditahan.
                            </div>`;
}

function cekbergerakdiamcs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
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
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
    }
  }
  
  function dafis(){
    let dafis = document.getElementById("dafis");
    let main = document.getElementById("main");
  
    if (dafis.className.indexOf("dafis-hilang") == -1){
      dafis.className += "dafis-hilang";
      main.className = main.className.replace("main","main-sempit");
    } else{
      dafis.className = dafis.className.replace("dafis-hilang","");
      main.className = main.className.replace("main-sempit","main");
    }
  }
  
  function tjk1(tjk1) {
    var x = document.getElementById(tjk1);
  
    if (x.className.indexOf("hilang") == -1) {
      x.className += " hilang";
    } else {
      x.className = x.className.replace("hilang", "");
    }
  }
  
  function home_klik(){
    var home_klik = document.getElementsByClassName("utama")
    var tanya = confirm("Apakah Anda yakin ingin meninggalkan halaman?");
      if (tanya) {
          window.location = "../index.html";
      }
  }
  function tujuan(tujuan) {
    var x = document.getElementById(tujuan);
  
    if (x.className.indexOf("hilang") == -1) {
      x.className += " hilang";
    } else {
      x.className = x.className.replace("hilang", "");
    }
  }