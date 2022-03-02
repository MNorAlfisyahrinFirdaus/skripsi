const locLast = window.location.pathname;
localStorage.setItem('locLast', locLast);

// localStorage.removeItem('nama');
// localStorage.removeItem('kelas');

// $('img').bind('contextmenu', function(e) {
//     return false;
// }); 


var namaS = localStorage.getItem('nama');
var kelasS = localStorage.getItem('kelas');

const video = document.querySelector('.video');

var video1_1 = document.getElementById("video1_1");

window.onload = function awal(){
   document.getElementById("info").hidden = false;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = true; 
};

function info(){
   document.getElementById("info").hidden = false;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = true;
   document.getElementById("btninfo").classList.add('btnaktif');
   document.getElementById("btndafus").classList.remove('btnaktif');
   document.getElementById("btnpetunjuk").classList.remove('btnaktif'); 
}
   
function dafus(){
   document.getElementById("info").hidden = true;
   document.getElementById("dafus").hidden = false;
   document.getElementById("petunjuk").hidden = true; 
   document.getElementById("btninfo").classList.remove('btnaktif');
   document.getElementById("btndafus").classList.add('btnaktif');
   document.getElementById("btnpetunjuk").classList.remove('btnaktif');
}
   
function petunjuk(){
   document.getElementById("info").hidden = true;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = false; 
   document.getElementById("btninfo").classList.remove('btnaktif');
   document.getElementById("btndafus").classList.remove('btnaktif');
   document.getElementById("btnpetunjuk").classList.add('btnaktif');
}

window.onload = function awalMateri(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
   document.getElementById("tiga").hidden = true; 
   document.getElementById("empat").hidden = true; 
};

function satu(){
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("btnnext").classList.remove('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('btnaktif');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('btnaktif');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('btnaktif'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('btnaktif');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua();" );
}

function dua(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("btnnext").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('btnaktif');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('btnaktif');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('btnaktif'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('btnaktif');
   document.getElementById("next").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu();" );
}

function tiga(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("btnnext").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('btnaktif');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('btnaktif');
   document.getElementById("tiga").hidden = false;
   document.getElementById("btntiga").classList.add('btnaktif'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('btnaktif'); 
   document.getElementById("next").setAttribute( "onClick", "javascript: empat();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: dua();" );
}

function empat(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('btnaktif');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('btnaktif');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('btnaktif'); 
   document.getElementById("empat").hidden = false;
   document.getElementById("btnempat").classList.add('btnaktif'); 
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("mnext").hidden = false;
}

window.onload = function awalMateri2(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
};

function satu2(){
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("btnnext").classList.remove('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('btnaktif');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('btnaktif');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua2();" );
}

function dua2(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('btnaktif');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('btnaktif');
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu2();" );
   document.getElementById("mnext").hidden = false;
}

window.onload = function awalMateri5(){
    document.getElementById("satu").hidden = false;
    document.getElementById("dua").hidden = true;
    document.getElementById("tiga").hidden = true; 
    document.getElementById("empat").hidden = true; 
    document.getElementById("lima").hidden = true; 
 };
 
 function satu5(){
    document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("btnnext").classList.remove('disabled'); 
   document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('btnaktif');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('btnaktif');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('btnaktif'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('btnaktif');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('btnaktif');
    document.getElementById("next").setAttribute( "onClick", "javascript: dua5();" );
 }
 
 function dua5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("btnnext").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('btnaktif');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('btnaktif');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('btnaktif'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('btnaktif');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('btnaktif');
    document.getElementById("next").setAttribute( "onClick", "javascript: tiga5();" );
    document.getElementById("prev").setAttribute( "onClick", "javascript: satu5();" );
 }
 
 function tiga5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("btnnext").classList.remove('disabled'); 
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('btnaktif');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('btnaktif');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('btnaktif'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('btnaktif');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('btnaktif'); 
    document.getElementById("next").setAttribute( "onClick", "javascript: empat5();" );
    document.getElementById("prev").setAttribute( "onClick", "javascript: dua5();" );
 }
 
 function empat5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("btnnext").classList.remove('disabled'); 
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('btnaktif');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('btnaktif');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('btnaktif'); 
    document.getElementById("empat").hidden = false;
    document.getElementById("btnempat").classList.add('btnaktif');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('btnaktif');
    document.getElementById("next").setAttribute( "onClick", "javascript: lima5();" );
    document.getElementById("prev").setAttribute( "onClick", "javascript: tiga5();" );
}

 function lima5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('btnaktif');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('btnaktif');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('btnaktif'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('btnaktif');
    document.getElementById("lima").hidden = false;
    document.getElementById("btnlima").classList.add('btnaktif'); 
    document.getElementById("btnnext").classList.add('disabled'); 
    document.getElementById("prev").setAttribute( "onClick", "javascript: empat5();" );
    document.getElementById("mnext").hidden = false;
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

function cekYa(){
    const jawabcs1 = document.getElementById('jawabcs1');
    jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan pilih jawaban yang benar
                        </div>`;
}

function cekTidak(){
    const jawabcs1 = document.getElementById('jawabcs1');
    jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Tidak semua bahan dapat ditarik oleh Magnet
                        </div>`;
}

let tarik = document.getElementById('tarik');
let tolak = document.getElementById('tolak');

function cekKel(){
    if ((tarik.innerText == 'Besi')&&(tolak.childNodes.length == 6)) {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Hasil percobaan tersebut kita dapat mengetahui bahwa : <br>Bahan magnetik diantaranya Besi, dan <br>Bahan nonmagnetik diantaranya Tembaga, Kuningan, Aluminium, Plastik, Kertas dan Kayu
                            </div>`;  
    } else {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan coba kelompokkan lagi bahan yang dapat ditarik dan tidak dapat ditarik magnet
                            </div>`; 
    }
}

function cek1_3cs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena kutub magnet sejenis akan tolak menolak jika didekatkan
                            </div>`;
}

function cek1_3cs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek1_3cs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena kutub magnet tidak sejenis akan tarik menarik jika didekatkan
                            </div>`;
}

function cek1_3cs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function kesim1_3(){
    const kesim1_3 = document.getElementById('kesim1_3').value;    
    kesimpulan1_3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim1_3}
                            </div>`;
}

function kesim1_4(){
    const kesim1_4 = document.getElementById('kesim1_4').value;    
    kesimpulan1_4.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim1_4}
                            </div>`;
}

function kesim2_1(){
    const kesim2_1 = document.getElementById('kesim2_1').value;    
    kesimpulan2_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim2_1}
                            </div>`;
}

function kesim2_2(){
    const kesim2_2 = document.getElementById('kesim2_2').value;    
    kesimpulan2_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim2_2}
                            </div>`;
}

function kesim2_3(){
    const kesim2_3 = document.getElementById('kesim2_3').value;    
    kesimpulan2_3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim2_3}
                            </div>`;
}

function kesim3_1(){
    const kesim3_1 = document.getElementById('kesim3_1').value;    
    kesimpulan3_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim3_1}
                            </div>`;
}

function kesim4_1(){
    const kesim4_1 = document.getElementById('kesim4_1').value;    
    kesimpulan4_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim4_1}
                            </div>`;
}

function kesim4_2(){
    const kesim4_2 = document.getElementById('kesim4_2').value;    
    kesimpulan4_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim4_2}
                            </div>`;
}

function kesim4_3(){
    const kesim4_3 = document.getElementById('kesim4_3').value;    
    kesimpulan4_3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim4_3}
                            </div>`;
}

function cek1_4cs1B() {
    const jawab1_4cs1 = document.getElementById('jawab1_4cs1');
    jawab1_4cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena serbuk besi membentuk pola garis gaya magnet
                            </div>`;
}

function cek1_4cs1S() {
    const jawab1_4cs1 = document.getElementById('jawab1_4cs1');
    jawab1_4cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_1cs1B() {
    const jawab2_1cs1 = document.getElementById('jawab2_1cs1');
    jawab2_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi tidak dapat menarik jepitan kertas sebelum magnet digosokkan terhadap paku besi
                            </div>`;
}

function cek2_1cs1S() {
    const jawab2_1cs1 = document.getElementById('jawab2_1cs1');
    jawab2_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_1cs2B() {
    const jawab2_1cs2 = document.getElementById('jawab2_1cs2');
    jawab2_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi dapat menarik jepitan kertas setelah magnet digosokkan terhadap paku besi
                            </div>`;
}

function cek2_1cs2S() {
    const jawab2_1cs2 = document.getElementById('jawab2_1cs2');
    jawab2_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_2cs1B() {
    const jawab2_2cs1 = document.getElementById('jawab2_2cs1');
    jawab2_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi tidak dapat menarik jepitan kertas sebelum paku besi ditempelkan(induksi) terhadap magnet
                            </div>`;
}

function cek2_2cs1S() {
    const jawab2_2cs1 = document.getElementById('jawab2_2cs1');
    jawab2_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_2cs2B() {
    const jawab2_2cs2 = document.getElementById('jawab2_2cs2');
    jawab2_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi dapat menarik jepitan kertas setelah paku besi ditempelkan(induksi) terhadap magnet
                            </div>`;
}

function cek2_2cs2S() {
    const jawab2_2cs2 = document.getElementById('jawab2_2cs2');
    jawab2_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_3cs1B() {
    const jawab2_3cs1 = document.getElementById('jawab2_3cs1');
    jawab2_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi tidak dapat menarik jepitan kertas sebelum paku besi dialirkan listrik
                            </div>`;
}

function cek2_3cs1S() {
    const jawab2_3cs1 = document.getElementById('jawab2_3cs1');
    jawab2_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_3cs2B() {
    const jawab2_3cs2 = document.getElementById('jawab2_3cs2');
    jawab2_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi dapat menarik jepitan kertas setelah paku besi dialirkan listrik
                            </div>`;
}

function cek2_3cs2S() {
    const jawab2_3cs2 = document.getElementById('jawab2_3cs2');
    jawab2_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek3_1cs1B() {
    const jawab3_1cs1 = document.getElementById('jawab3_1cs1');
    jawab3_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena semua kutub selatan jarum kompas mengarah ke kutub utara bumi
                            </div>`;
}

function cek3_1cs1S() {
    const jawab3_1cs1 = document.getElementById('jawab3_1cs1');
    jawab3_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek3_1cs2B() {
    const jawab3_1cs2 = document.getElementById('jawab3_1cs2');
    jawab3_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena semua jarum kompas mengarah ke magnet batang
                            </div>`;
}

function cek3_1cs2S() {
    const jawab3_1cs2 = document.getElementById('jawab3_1cs2');
    jawab3_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek3_1cs3B() {
    const jawab3_1cs3 = document.getElementById('jawab3_1cs3');
    jawab3_1cs3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena semua kutub selatan jarum kompas mengarah ke kutub utara bumi
                            </div>`;
}

function cek3_1cs3S() {
    const jawab3_1cs3 = document.getElementById('jawab3_1cs3');
    jawab3_1cs3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_1cs1B() {
    const jawab4_1cs1 = document.getElementById('jawab4_1cs1');
    jawab4_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena jarum kompas akan menyimpang dari kawat penghantar yang dialirkan arus listrik
                            </div>`;
}

function cek4_1cs1S() {
    const jawab4_1cs1 = document.getElementById('jawab4_1cs1');
    jawab4_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_2cs1B() {
    const jawab4_2cs1 = document.getElementById('jawab4_2cs1');
    jawab4_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena jarum kompas akan menyimpang ketika didekatkan kumparan yang dialiri arus listrik 
                            </div>`;
}

function cek4_2cs1S() {
    const jawab4_2cs1 = document.getElementById('jawab4_2cs1');
    jawab4_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_2cs2B() {
    const jawab4_2cs2 = document.getElementById('jawab4_2cs2');
    jawab4_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena jarum kompas tidak bergerak ketika didekatkan kumparan besi yang dialiri arus listrik
                            </div>`;
}

function cek4_2cs2S() {
    const jawab4_2cs2 = document.getElementById('jawab4_2cs2');
    jawab4_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_3cs1B() {
    const jawab4_3cs1 = document.getElementById('jawab4_3cs1');
    jawab4_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena aluminium foil yang berada di antara magnet U akan melengkung ketika dialiri arus listrik
                            </div>`;
}

function cek4_3cs1S() {
    const jawab4_3cs1 = document.getElementById('jawab4_3cs1');
    jawab4_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_3cs2B() {
    const jawab4_3cs2 = document.getElementById('jawab4_3cs2');
    jawab4_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena aluminium foil melengkung ke atas atau ke bawah tergantung polaritas arus listrik yang dialiri
                            </div>`;
}

function cek4_3cs2S() {
    const jawab4_3cs2 = document.getElementById('jawab4_3cs2');
    jawab4_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}
