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
