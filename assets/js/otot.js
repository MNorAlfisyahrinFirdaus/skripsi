//------------
const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

function cekototcs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Ketika kita mengangkat buku, kegiatan tersebut memanfaatkan gaya otot manusia, dengan memanfaatkan gaya otot, 
                            kita dapat mengangkat buku. 
                            </div>`;
}
function cekototcs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
function cekototcs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       Ketika kita mendorong meja kegiatan tersebut memanfaatkan gaya otot manusia, dengan memanfaatkan gaya otot, 
                       kita dapat mendorong meja. 
                            </div>`;
}
function cekototcs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
function cekototcs3S() {
    const jawab1_3cs3 = document.getElementById('jawab1_3cs3');
    jawab1_3cs3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       Ketika kita mengangkat buku, mendorong meja dan menekan lilin mainan, kegiatan tersebut memanfaatkan 
                       gaya otot manusia, dengan memanfaatkan gaya otot, 
                       kita dapat mengangkat buku, mendorong meja dan menekan lilin mainan hingga berubah bentuk.
                            </div>`;
}
function cekototcs3B() {
    const jawab1_3cs3 = document.getElementById('jawab1_3cs3');
    jawab1_3cs3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}