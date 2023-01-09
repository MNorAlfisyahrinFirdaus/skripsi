//------------
const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

function cekgravitasics1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                           Batu yang lebih cepat jatuh kebawah, karena batu lebih berat dibandingkan kapas.
                            </div>`;
}
function cekgravitasics1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
function cekgravitasics2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       Gaya gravitasi dipengaruhi oleh ketinggian, ukuran dan bentuk benda. 
                       Semakin berat suatu benda, maka akan semakin cepat pula benda 
                       itu jatuh ke bawah. Sebaliknya, benda yang ringan akan lebih lambat jatuh ke bawah. 
                            </div>`;
}
function cekgravitasics2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
//--tombol slide ----------------------------------------------
function slide1(){
    hal1.style.display="";
    hal2.style.display="none";
    hal3.style.display="none";


    tombol1.style.background="#464646";
    tombol2.style.background="rgb(20, 134, 75) ";
    tombol3.style.background="rgb(20, 134, 75)";

}
function slide2(){
  hal1.style.display="none";
  hal2.style.display="";
  hal3.style.display="none";

    tombol1.style.background="rgb(20, 134, 75)";
    tombol2.style.background="#464646";
    tombol3.style.background="rgb(20, 134, 75) "; 


}
function slide3(){
  hal1.style.display="none";
  hal2.style.display="none";
  hal3.style.display="";

    tombol1.style.background="rgb(20, 134, 75)";
    tombol2.style.background="rgb(20, 134, 75)";
    tombol3.style.background="#464646";


}
