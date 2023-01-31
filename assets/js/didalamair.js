const benar = '<span style="color : green;"> Jawaban Anda Benar</span>'
const salah = '<span style="color : red;">Jawaban Anda Salah</span>'

const lat1_2A = document.getElementById('jlat1_2A');
const lat1_2B = document.getElementById('jlat1_2B');
const lat1_2C = document.getElementById('jlat1_2C');
const lat1_2D = document.getElementById('jlat1_2D');
const lat1_2 = document.getElementById('lat1_2');

var jwblat1_2 = '';
function cekjwb1_2(pilih){
    jwblat1_2 = pilih;
}


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
                            Sedangkan benda seperti bola plastik mengapung karena gaya berat benda lebih kecil dari gaya angkat air. 
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
//--------------------//
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
var x = document.getElementById("isitujuan");
var xx= document.querySelector('.isitujuan');
var x1 = document.getElementById("petunjuk");
var xx1= document.querySelector('.petunjuk');
var x2 = document.getElementById("petunjuk2");
var xx2= document.querySelector('.petunjuk2');
var x3 = document.getElementById("petunjuk3");
var xx3= document.querySelector('.petunjuk3');
xx.addEventListener("click",function(){
  x.classList.toggle("hilang");
})
xx1.addEventListener("click",function(){
	x1.classList.toggle("hilang");
  })
  xx2.addEventListener("click",function(){
	x2.classList.toggle("hilang");
  })
  xx3.addEventListener("click",function(){
	x3.classList.toggle("hilang");
  })

let jjj = document.querySelector(".jjj");
let btn =document.querySelector(".btn");
btn.addEventListener("click", function(){
	console.log("ok")
	jjj.classList.toggle("hilang");
} );
