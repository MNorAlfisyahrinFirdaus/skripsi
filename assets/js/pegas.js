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
                            Ketika penggaris plastik ditekan dan gelang karet ditarik ke arah berlawanan, maka 
                            penggaris plastik dan gelang karet akan berubah bentuk ketika diberikan gaya dan dapat 
                            kembali ke bentuk semula saat gaya tersebut dihilangkan. Sedangkan tali rafia, tali sepatu 
                            ketika ditarik ke arah berlawanan dan sendok besi ditekan di bagian atasnya, maka benda tersebut tidak terjadi apa-apa,  
                            karena tali rafia, tali sepatu dan sendok besi tidak memiliki sifat pegas atau elastis. 
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
