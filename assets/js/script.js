var namaS = localStorage.getItem('nama');
var kelasS = localStorage.getItem('kelas');

window.onload = function awalMateri(){
    document.getElementById("satu").hidden = false;
    document.getElementById("dua").hidden = true;
};
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
//---Peta konsep , daftar putaka dll-----------------------------------------

 
window.onload = function awal(){
    document.getElementById("info").hidden = false;
    document.getElementById("dafus").hidden = true;
    document.getElementById("petunjuk").hidden = true; 
 };
 
 function info(){
    document.getElementById("info").hidden = false;
    document.getElementById("dafus").hidden = true;
    document.getElementById("petunjuk").hidden = true;
    document.getElementById("petakonsep").hidden = true; 
    document.getElementById("btninfo").classList.add('active');
    document.getElementById("btndafus").classList.remove('active');
    document.getElementById("btnpetunjuk").classList.remove('active'); 
    document.getElementById("btnpetakonsep").classList.remove('active');
 }
    
 function dafus(){
    document.getElementById("info").hidden = true;
    document.getElementById("dafus").hidden = false;
    document.getElementById("petunjuk").hidden = true; 
    document.getElementById("petakonsep").hidden = true; 
    document.getElementById("btninfo").classList.remove('active');
    document.getElementById("btndafus").classList.add('active');
    document.getElementById("btnpetunjuk").classList.remove('active');
    document.getElementById("btnpetakonsep").classList.remove('active');
 }
    
 function petunjuk(){
    document.getElementById("info").hidden = true;
    document.getElementById("dafus").hidden = true;
    document.getElementById("petunjuk").hidden = false; 
    document.getElementById("petakonsep").hidden = true; 
    document.getElementById("btninfo").classList.remove('active');
    document.getElementById("btndafus").classList.remove('active');
    document.getElementById("btnpetunjuk").classList.add('active');
    document.getElementById("btnpetakonsep").classList.remove('active');
 }
 function petakonsep(){
    document.getElementById("info").hidden = true;
    document.getElementById("dafus").hidden = true;
    document.getElementById("petunjuk").hidden = true; 
    document.getElementById("petakonsep").hidden = false; 
    document.getElementById("btninfo").classList.remove('active');
    document.getElementById("btndafus").classList.remove('active');
    document.getElementById("btnpetunjuk").classList.remove('active');
    document.getElementById("btnpetakonsep").classList.add('active');
 }
 //---------------------------------------------------
 function cek1_3cs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena muatan listrik yang sejenis akan saling tolak-menolak
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
                            Muatan listrik yang sejenis akan saling tolak-menolak
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


function cek1_3cs3B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs3');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            muatan listrik yang tidak sejenis akan saling tarik-menarik ketika didekatkan
                            </div>`;
}

function cek1_3cs3S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs3');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

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

function cekKel(){
    if ((tarik.innerText == 'Besi')&&(tolak.childNodes.length == 5)) {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            ${benar}<br>
                            <div class="pembahasan2">
                          
                            </div>
                            Hasil percobaan tersebut kita dapat mengetahui bahwa : <br>Benda-benda yang dapat ditarik oleh 
                            magnet disebut benda magnetis. Contoh benda-benda magnetis antara lain besi, jarum, peniti, klip kertas, paku, gunting, dan lain-lain. Sedangkan benda yang tidak ditarik oleh magnet disebut benda nonmagnetis. Contoh benda-benda nonmagnetis, 
                            antara lain batu kerekil, pensil ,penghapus,kelereng, kertas dan lain-lain
                            </div>`;  
    } else {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${salah}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Silahkan coba kelompokkan lagi bahan yang dapat ditarik dan tidak dapat ditarik magnet
                            </div>`; 
    }
}


//INTREKTIF KUIS PILIHAN GANDA SETELAH MENONTON VIDEO
 
const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

//Soal Ganda Interaktif Gaya Otot
var jwblat1_1 = '';
function cekjwbotot1(pilih){
    jwblat1_1 = pilih;
}

const lat1_1A = document.getElementById('jlat1_1A');
const lat1_1B = document.getElementById('jlat1_1B');
const lat1_1C = document.getElementById('jlat1_1C');
const lat1_1D = document.getElementById('jlat1_1D');
const lat1_1 = document.getElementById('lat1_1');

function ceklat1_1(jwb){
    lat1_1A.disabled = true;
    lat1_1B.disabled = true;
    lat1_1C.disabled = true;
    lat1_1D.disabled = true;
    if (jwblat1_1 === jwb){
        lat1_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Peristiwa yang berhubungan gaya otot Isti mendorong meja, 
                            karena mendorong meja di lakukan dengan otot-otot kita. 
                            </div>`;
    } else {
        lat1_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${salah}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }
}

function repeat1_1(){
    lat1_1A.disabled = false;
    lat1_1B.disabled = false;
    lat1_1C.disabled = false;
    lat1_1D.disabled = false;
    lat1_1A.checked = false;
    lat1_1B.checked = false;
    lat1_1C.checked = false;
    lat1_1D.checked = false;
    lat1_1.innerHTML = "";
}

var jwblat1_2 = '';
function cekjwb1_2(pilih){
    jwblat1_2 = pilih;
}

const lat1_2A = document.getElementById('jlat1_2A');
const lat1_2B = document.getElementById('jlat1_2B');
const lat1_2C = document.getElementById('jlat1_2C');
const lat1_2D = document.getElementById('jlat1_2D');
const lat1_2 = document.getElementById('lat1_2');

function ceklat1_2(jwb){
    lat1_2A.disabled = true;
    lat1_2B.disabled = true;
    lat1_2C.disabled = true;
    lat1_2D.disabled = true;
    if (jwblat1_2 === jwb){
        lat1_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${benar}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Benda yang dimasukkan ke dalam air akan mendapat gaya ke atas oleh air. 
                            Benda tenggelam di dalam zat cair jika gaya berat benda lebih besar dari 
                            pada gaya ke atas oleh zat cair. Seperti kelereng, besi, peniti, Paku, kerikil. 
                            Sedangkan benda seperti gabus dan bola plastik mengapung karena gaya berat benda lebih kecil dari gaya angkat air. 
                            </div>`;
    } else {
        lat1_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                             ${salah}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }
}

function repeat1_2(){
    lat1_2A.disabled = false;
    lat1_2B.disabled = false;
    lat1_2C.disabled = false;
    lat1_2D.disabled = false;
    lat1_2A.checked = false;
    lat1_2B.checked = false;
    lat1_2C.checked = false;
    lat1_2D.checked = false;
    lat1_2.innerHTML = "";
}

var jwblat2_1 = '';
function cekjwb2_1(pilih){
    jwblat2_1 = pilih;
}

const lat2_1A = document.getElementById('jlat2_1A');
const lat2_1B = document.getElementById('jlat2_1B');
const lat2_1C = document.getElementById('jlat2_1C');
const lat2_1D = document.getElementById('jlat2_1D');
const lat2_1 = document.getElementById('lat2_1');

function ceklat2_1(jwb){
    lat2_1A.disabled = true;
    lat2_1B.disabled = true;
    lat2_1C.disabled = true;
    lat2_1D.disabled = true;
    if (jwblat2_1 === jwb){
        lat2_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena jenis-jenis zat yaitu padat, gas dan cair
                            </div>`;
    } else {
        lat2_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }
}

function repeat2_1(){
    lat2_1A.disabled = false;
    lat2_1B.disabled = false;
    lat2_1C.disabled = false;
    lat2_1D.disabled = false;
    lat2_1A.checked = false;
    lat2_1B.checked = false;
    lat2_1C.checked = false;
    lat2_1D.checked = false;
    lat2_1.innerHTML = "";
}

var jwblat2_2 = '';
function cekjwb2_2(pilih){
    jwblat2_2 = pilih;
}

const lat2_2A = document.getElementById('jlat2_2A');
const lat2_2B = document.getElementById('jlat2_2B');
const lat2_2C = document.getElementById('jlat2_2C');
const lat2_2D = document.getElementById('jlat2_2D');
const lat2_2 = document.getElementById('lat2_2');

function ceklat2_2(jwb){
    lat2_2A.disabled = true;
    lat2_2B.disabled = true;
    lat2_2C.disabled = true;
    lat2_2D.disabled = true;
    if (jwblat2_2 === jwb){
        lat2_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena aluminium dan minyak merupakan zat cair
                            </div>`;
    } else {
        lat2_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }
}

function repeat2_2(){
    lat2_2A.disabled = false;
    lat2_2B.disabled = false;
    lat2_2C.disabled = false;
    lat2_2D.disabled = false;
    lat2_2A.checked = false;
    lat2_2B.checked = false;
    lat2_2C.checked = false;
    lat2_2D.checked = false;
    lat2_2.innerHTML = "";
}

var jwblat3_1 = '';
function cekjwb3_1(pilih){
    jwblat3_1 = pilih;
}

const lat3_1A = document.getElementById('jlat3_1A');
const lat3_1B = document.getElementById('jlat3_1B');
const lat3_1C = document.getElementById('jlat3_1C');
const lat3_1D = document.getElementById('jlat3_1D');
const lat3_1 = document.getElementById('lat3_1');

function ceklat3_1(jwb){
    lat3_1A.disabled = true;
    lat3_1B.disabled = true;
    lat3_1C.disabled = true;
    lat3_1D.disabled = true;
    if (jwblat3_1 === jwb){
        lat3_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena Gaya gravitasi, disebut juga gaya tarik adalah kekuatan bumi untuk menarik benda ke bawah. 
                            </div>`;
    } else {
        lat3_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }
}

function repeat3_1(){
    lat3_1A.disabled = false;
    lat3_1B.disabled = false;
    lat3_1C.disabled = false;
    lat3_1D.disabled = false;
    lat3_1A.checked = false;
    lat3_1B.checked = false;
    lat3_1C.checked = false;
    lat3_1D.checked = false;
    lat3_1.innerHTML = "";
}

var jwblat3_2 = '';
function cekjwb3_2(pilih){
    jwblat3_2 = pilih;
}

const lat3_2A = document.getElementById('jlat3_2A');
const lat3_2B = document.getElementById('jlat3_2B');
const lat3_2C = document.getElementById('jlat3_2C');
const lat3_2D = document.getElementById('jlat3_2D');
const lat3_2 = document.getElementById('lat3_2');

function ceklat3_2(jwb){
    lat3_2A.disabled = true;
    lat3_2B.disabled = true;
    lat3_2C.disabled = true;
    lat3_2D.disabled = true;
    if (jwblat3_2 === jwb){
        lat3_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena Gaya gravitasi, disebut juga gaya tarik adalah kekuatan bumi untuk menarik benda ke bawah. 
                            </div>`;
    } else {
        lat3_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }
}

function repeat3_2(){
    lat3_2A.disabled = false;
    lat3_2B.disabled = false;
    lat3_2C.disabled = false;
    lat3_2D.disabled = false;
    lat3_2A.checked = false;
    lat3_2B.checked = false;
    lat3_2C.checked = false;
    lat3_2D.checked = false;
    lat3_2.innerHTML = "";
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
    if ((tarik.innerText == 'Penghapus')&&(tolak.childNodes.length == 6)) {
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
//-----------cektable-------
let bbesi = document.getElementById('bbesi');
let sbesi = document.getElementById('sbesi');

let bkelereng = document.getElementById('bkelereng');
let skelereng = document.getElementById('skelereng');

let bpeniti = document.getElementById('bpeniti');
let speniti = document.getElementById('speniti');

let bpaku = document.getElementById('bpaku');
let spaku = document.getElementById('spaku');

let bgabus = document.getElementById('bgabus');
let sgabus = document.getElementById('sgabus');

let bkerikil = document.getElementById('bkerikil');
let skerikil = document.getElementById('skerikil');

let bbola = document.getElementById('bbola');
let sbola = document.getElementById('sbola');


const bujur = '<span style="color : green;">Benar</span>'
const kadabujur = '<span style="color : red;">Salah</span>'

function cekBBesi() {
    sbesi.checked = false;
    const cekBesi = document.querySelector('.cekBesi');
    cekBesi.innerHTML = bujur;
}
function cekSBesi() {
    bbesi.checked = false;
    const cekBesi = document.querySelector('.cekBesi');
    cekBesi.innerHTML = kadabujur;
}

function cekBKelereng() {
    skelereng.checked = false;
    const cekKelereng = document.querySelector('.cekKelereng');
    cekKelereng.innerHTML = bujur;
}
function cekSKelereng() {
    bkelereng.checked = false;
    const cekKelereng = document.querySelector('.cekKelereng');
    cekKelereng.innerHTML = kadabujur;
}

function cekBPeniti() {
    speniti.checked = false;
    const cekPeniti = document.querySelector('.cekPeniti');
    cekPeniti.innerHTML = bujur;
}
function cekSPeniti() {
    bpeniti.checked = false;
    const cekPeniti = document.querySelector('.cekPeniti');
    cekPeniti.innerHTML = kadabujur;
}

function cekBPaku() {
    spaku.checked = false;
    const cekPaku = document.querySelector('.cekPaku');
    cekPaku.innerHTML = bujur;
}
function cekSPaku() {
    bpaku.checked = false;
    const cekPaku = document.querySelector('.cekPaku');
    cekPaku.innerHTML = kadabujur;
}

function cekBGabus() {
    sgabus.checked = false;
    const cekGabus = document.querySelector('.cekGabus');
    cekGabus.innerHTML = bujur;
}
function cekSGabus() {
    bgabus.checked = false;
    const cekGabus = document.querySelector('.cekGabus');
    cekGabus.innerHTML = kadabujur;
}

function cekBKerikil() {
    skerikil.checked = false;
    const cekKerikil = document.querySelector('.cekKerikil');
    cekKerikil.innerHTML = bujur;
}
function cekSKerikil() {
    bkerikil.checked = false;
    const cekKerikil = document.querySelector('.cekKerikil');
    cekKerikil.innerHTML = kadabujur;
}

function cekBBola() {
    sbola.checked = false;
    const cekBola = document.querySelector('.cekBola');
    cekBola.innerHTML = bujur;
}
function cekSBola() {
    bbola.checked = false;
    const cekBola = document.querySelector('.cekBola');
    cekBola.innerHTML = kadabujur;
}


