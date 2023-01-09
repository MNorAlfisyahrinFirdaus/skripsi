//------------
const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

function ceklistrikcs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Ketika penggaris plastik didekatkan ke potongan kertas akan tidak terjadi apa-apa.  
                            </div>`;
}
function ceklistrikcs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
function ceklistrikcs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       Penggaris plastik didekatkan ke potongan kertas tidak terjadi apa-apa. 
                       tetapi saat penggaris plastik digosokkan ke rambut yang kering, energi listrik statis yang berdiam pada penggaris 
                       berubah menjadi energi magnet, sehingga membuat kertas menjadi tertarik ke arahnya. 
                            </div>`;
}
function ceklistrikcs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
