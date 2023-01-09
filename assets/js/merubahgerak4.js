//------------
function cekmerubahgerak2cs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                           
                            </div>
                            Kelereng dan bola tenis akan tetap melaju ketika tidak ditahan.
                            </div>`;
}

function cekmerubahgerak2cs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cekmerubahgerak2cs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                       ${benar}<br> 
                       Kelereng dan bola tenis akan berhenti ketika  ditahan.
                            </div>`;
}

function cekmerubahgerak2cs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                           ${salah}<br>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
//-----

let bbesi = document.getElementById('bbesi');
let sbesi = document.getElementById('sbesi');

let btembaga = document.getElementById('btembaga');
let stembaga = document.getElementById('stembaga');

let bkuningan = document.getElementById('bkuningan');
let skuningan = document.getElementById('skuningan');

let baluminium = document.getElementById('baluminium');
let saluminium = document.getElementById('saluminium');

let bplastik = document.getElementById('bplastik');
let splastik = document.getElementById('splastik');

let bkertas = document.getElementById('bkertas');
let skertas = document.getElementById('skertas');

let bkayu = document.getElementById('bkayu');
let skayu = document.getElementById('skayu');


const benar = '<span style="color : green;">Benar</span>'
const salah = '<span style="color : red;">Salah</span>'

function cekBBesi() {
    sbesi.checked = false;
    const cekBesi = document.querySelector('.cekBesi');
    cekBesi.innerHTML = benar;
}
function cekSBesi() {
    bbesi.checked = false;
    const cekBesi = document.querySelector('.cekBesi');
    cekBesi.innerHTML = salah;
}

function cekBTembaga() {
    stembaga.checked = false;
    const cekTembaga = document.querySelector('.cekTembaga');
    cekTembaga.innerHTML = benar;
}
function cekSTembaga() {
    btembaga.checked = false;
    const cekTembaga = document.querySelector('.cekTembaga');
    cekTembaga.innerHTML = salah;
}

function cekBKuningan() {
    skuningan.checked = false;
    const cekKuningan = document.querySelector('.cekKuningan');
    cekKuningan.innerHTML = benar;
}
function cekSKuningan() {
    bkuningan.checked = false;
    const cekKuningan = document.querySelector('.cekKuningan');
    cekKuningan.innerHTML = salah;
}

function cekBAluminium() {
    saluminium.checked = false;
    const cekAluminium = document.querySelector('.cekAluminium');
    cekAluminium.innerHTML = benar;
}
function cekSAluminium() {
    baluminium.checked = false;
    const cekAluminium = document.querySelector('.cekAluminium');
    cekAluminium.innerHTML = salah;
}

function cekBPlastik() {
    splastik.checked = false;
    const cekPlastik = document.querySelector('.cekPlastik');
    cekPlastik.innerHTML = benar;
}
function cekSPlastik() {
    bplastik.checked = false;
    const cekPlastik = document.querySelector('.cekPlastik');
    cekPlastik.innerHTML = salah;
}

function cekBKertas() {
    skertas.checked = false;
    const cekKertas = document.querySelector('.cekKertas');
    cekKertas.innerHTML = benar;
}
function cekSKertas() {
    bkertas.checked = false;
    const cekKertas = document.querySelector('.cekKertas');
    cekKertas.innerHTML = salah;
}

function cekBKayu() {
    skayu.checked = false;
    const cekKayu = document.querySelector('.cekKayu');
    cekKayu.innerHTML = benar;
}
function cekSKayu() {
    bkayu.checked = false;
    const cekKayu = document.querySelector('.cekKayu');
    cekKayu.innerHTML = salah;
}
//dragdrop----------------------------------------------------
function cekYa(){
    const jawabcs1 = document.getElementById('jawabcs1');
    jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                     ${salah}<br>
                        <div class="pembahasan2">
                      
                        </div>
                        Silahkan pilih lagi jawaban yang benar
                        </div>`;
}

function cekTidak(){
    const jawabcs1 = document.getElementById('jawabcs1');
    jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                         ${benar}<br>
                        <div class="pembahasan2">
                        
                        </div>
                        Tidak semua bahan dapat ditarik oleh magnet
                        </div>`;
}
$(function () {
    $('[data-toggle="popover"]').popover('show')
  })

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function cekdrop(){
    if ((tarik.innerText == 'Besi')&&(tolak.childNodes.length == 6)) {
        const jawabdrop = document.getElementById('jawabdrop');
        jawabdrop.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            ${benar}<br>
                            <div class="pembahasan2">
                          
                            </div>
                            Hasil percobaan tersebut kita dapat mengetahui bahwa : <br>Bahan magnetik diantaranya Besi, dan <br>Bahan nonmagnetik diantaranya Tembaga, Kuningan, Aluminium, Plastik, Kertas dan Kayu
                            </div>`;  
    } else {
        const jawabdrop = document.getElementById('jawabdrop');
        jawabdrop.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${salah}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Silahkan coba kelompokkan lagi bahan yang dapat ditarik dan tidak dapat ditarik magnet
                            </div>`; 
    }
}


