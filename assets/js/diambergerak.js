const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

//------------
function cekdiambergerakcs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Ketika kelereng yang awalnya diam tidak bergerak dan diberi gaya dorong 
                            berupa sentilan maka, kelereng akan bergerak. karena benda bergerak 
                            merupakan salah satu 
                            bentuk dari pengaruh gaya yang diberikan terhadap benda meskipun awalnya benda itu diam
                            </div>`;
}

function cekdiambergerakcs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cekdiambergerakcs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       Bola mainan yang awalnya diam tidak bergerak dan diberi gaya dorong berupa 
                       sentilan maka, bola mainan akan bergerak. karena benda bergerak merupakan salah 
                       satu bentuk dari pengaruh gaya yang diberikan terhadap benda meskipun awalnya benda itu diam. 
                            </div>`;
}

function cekdiambergerakcs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
