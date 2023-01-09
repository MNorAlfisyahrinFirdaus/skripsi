//------------
const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

function cekmerubahbendacs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Memberikan gaya berupa tekanan pada botol dapat merubah bentuk. 
                            Maka dari itu, perubahan tersebut menunjukkan bahwa  gaya yang diberikan dapat mempengaruhi atau mengubah bentuk benda. 
                            </div>`;
}
function cekmerubahbendacs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
function cekmerubahbendacs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       Memberikan gaya berupa tekanan pada plastisin dapat membuat bermacam-macam bentuk. 
                       Maka dari itu, perubahan tersebut 
                       menunjukkan bahwa  gaya yang diberikan dapat mempengaruhi atau mengubah bentuk benda. 
                            </div>`;
}
function cekmerubahbendacs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
