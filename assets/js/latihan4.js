// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDnNS-JVEEibV8uiAcMRoG_I-hISV6oAY4",
    authDomain: "kemagnetan-ac738.firebaseapp.com",
    projectId: "kemagnetan-ac738",
    storageBucket: "kemagnetan-ac738.appspot.com",
    messagingSenderId: "430277922401",
    appId: "1:430277922401:web:45fa0234279c7194922420",
    measurementId: "G-ZSQFR474K6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database();
  const dbkkm = db.ref('db_kkm/').on('value', kkmSuccess, handleError)
  
  let loop1;
  let kkm4 = 0;
  
  function kkmSuccess(items1) {
    kkm4 = items1.val()[3]['kkm'];
  }
  
  function handleError(error) {
    console.log(error);
  }

var namaS = localStorage.getItem('nama');
var kelasS = localStorage.getItem('kelas');
var sekolahS = localStorage.getItem('sekolah');

const namaD = document.getElementById('namaD');
namaD.innerHTML = namaS;

const kelasD = document.getElementById('kelasD');
kelasD.innerHTML = kelasS;

const sekolahD = document.getElementById('sekolahD');
sekolahD.innerHTML = sekolahS;

let jawabB=[];

function mulai4() {
    if ((namaD == "") && (kelasD == "") && (sekolahD == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
    } else if((namaD == "")&&(kelasD == "")){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = '';
    } else if((namaD == "")&&(sekolahD == "")){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
    } else if((sekolahD == "")&&(kelasD == "")){
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
    } else if(namaD == ""){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
        errSekolah.innerHTML = '';
    }else if(kelasD == ""){
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errSekolah.innerHTML = '';
    }else if (sekolahD == ""){
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errKelas.innerHTML = '';
    } else{
        const dataKuis4 = document.getElementById('dataKuis4');
        dataKuis4.hidden = true;
        
        const latihan4 = document.getElementById('kuis4');
        latihan4.hidden = false;
        
        listsoal4();
    }       
}

function listsoal4() {
    let noSoal = 1;
        function getSoal(url, success, error){
            let xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        success(xhr.response);
                    }else if(XPathEvaluator.status === 404){
                        error();
                    }
                }
            }
            xhr.open('get', url);
            xhr.send();
            }
            
            getSoal('../kuis/kuis4.json', (results) => {
            const listSoalJson = JSON.parse(results);
            let soal = '';
            let soalRand = [];
            let soalRandom = [];
            let i = 0;
            
            while (i < listSoalJson.length) {
                let rand = Math.floor(Math.random() * listSoalJson.length);
                soalRand[i] = listSoalJson[rand];
                soalRandom = Array.from(new Set(soalRand));
                i = soalRandom.length;
            }

            soalRandom.forEach(s => {
                soal += tampilSoal(s);
            });
            
            const listSoal = document.querySelector('.list-soal');
            listSoal.innerHTML = soal;
            
            document.getElementById("id1").hidden = false;
            document.getElementById("id2").hidden = true;
            document.getElementById("id3").hidden = true;
            document.getElementById("id4").hidden = true;
            document.getElementById("id5").hidden = true;
            
            }, () => {
            
            });
            
            countDownDate = new Date().getTime();
                        //waktu 30 menit
                        countDownDate += 901000;
                        //waktu 45 menit
                        // countDownDate += 2700000;
                        // countDownDate += 12000;
                        //15 detik
                        // countDownDate += 17000;
                        var x = setInterval(function() {
                        var now = new Date().getTime();
                        var distance = countDownDate - now;
                            
                        // Perhitungan waktu untuk menit dan detik
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            
                        document.getElementById("waktu").innerHTML = minutes + ":" + seconds;
                            
                        if (distance < 0) {
                            clearInterval(x);
                            document.getElementById("waktu").innerHTML = "Waktu Selesai";
                            nilaiwktu=1;
                            cekKuis4TO();
                        }
                        }, 1000);
            
            let idx = 0;
            function tampilSoal(s){
                jawabB[idx++]=s.jawaban;
                return `<div id="id${idx}">
                    <form>
                    <p>${noSoal++}. ${s.soal}</p>
                    <input type="radio" id="jA${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="A">
                    <label for="A">${s.a}</label><br>
                    <input type="radio" id="jB${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="B">
                    <label for="B">${s.b}</label><br>
                    <input type="radio" id="jC${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="C">
                    <label for="C">${s.c}</label><br>
                    <input type="radio" id="jD${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="D">
                    <label for="D">${s.d}</label><br>
                    </form>
                    </div>`
            }
}



let kuis4_1 = "";
let kuis4_2 = "";
let kuis4_3 = "";
let kuis4_4 = "";
let kuis4_5 = "";
let nilai = 0;
function cek1(pilih){
    kuis4_1 = pilih;
    document.getElementById("soal1").classList.add('active','btn-primary');
    document.getElementById("soal1").classList.remove('btn-light');
}
function cek2(pilih){
    kuis4_2 = pilih;
    document.getElementById("soal2").classList.add('active','btn-primary');
    document.getElementById("soal2").classList.remove('btn-light');
}
function cek3(pilih){
    kuis4_3 = pilih;
    document.getElementById("soal3").classList.add('active','btn-primary');
    document.getElementById("soal3").classList.remove('btn-light');
}
function cek4(pilih){
    kuis4_4 = pilih;
    document.getElementById("soal4").classList.add('active','btn-primary');
    document.getElementById("soal4").classList.remove('btn-light');
}
function cek5(pilih){
    kuis4_5 = pilih;
    document.getElementById("soal5").classList.add('active','btn-primary');
    document.getElementById("soal5").classList.remove('btn-light');
}
$(function(){
    setInterval(cek, 1000);
});

let kuis4=[];
function cek(){
    kuis4=[kuis4_1,kuis4_2,kuis4_3,kuis4_4,kuis4_5];
}
        
function cekKuis4(){
    if ((kuis4_1 == "") || (kuis4_2 == "") || (kuis4_3 == "") || (kuis4_4 == "") || (kuis4_5 == "")) {
        $('#ModalKuisKosong').modal('show')
        $('#ModalSubmit4').modal('hide')
    } else {
        $('#ModalSubmit4').modal('hide')
        for (let a = 0; a < jawabB.length; a++) {
            if (kuis4[a] == jawabB[a]){
                const latihan4 = document.getElementById('kuis4');
                latihan4.hidden = true;
                const hasil2 = document.getElementById('hasilKuis4');
                hasil2.hidden = false;
                nilai = nilai + 20;
            }  
        }
        
        localStorage.setItem("nkuis4", nilai);

        if (nilai < kkm4) {
            const namaHTL = document.getElementById('namaHTL');
            namaHTL.innerHTML = namaS;
            const kelasHTL = document.getElementById('kelasHTL');
            kelasHTL.innerHTML = kelasS;
            const sekolahHTL = document.getElementById('sekolahHTL');
            sekolahHTL.innerHTML = sekolahS;
            const nilaiHTL = document.getElementById('nilaiHTL');
            nilaiHTL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = false;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = true;
        } else {
            const namaHL = document.getElementById('namaHL');
            namaHL.innerHTML = namaS;
            const kelasHL = document.getElementById('kelasHL');
            kelasHL.innerHTML = kelasS;
            const sekolahHL = document.getElementById('sekolahHL');
            sekolahHL.innerHTML = sekolahS;
            const nilaiHL = document.getElementById('nilaiHL');
            nilaiHL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = true;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = false;
        }

        let harinya = hari();
        let waktunya = waktu();

        createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
    }
}

function cekKuis4TO() {
    const latihan4 = document.getElementById('kuis4');
    latihan4.hidden = true;
    const hasil2 = document.getElementById('hasilKuis4');
    hasil2.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (kuis4[a] == jawabB[a]){
            nilai = nilai + 20;
        }  
    }
    
    localStorage.setItem("nkuis4", nilai);

    if (nilai < kkm4) {
        const namaHTL = document.getElementById('namaHTL');
        namaHTL.innerHTML = namaS;
        const kelasHTL = document.getElementById('kelasHTL');
        kelasHTL.innerHTML = kelasS;
        const sekolahHTL = document.getElementById('sekolahHTL');
        sekolahHTL.innerHTML = sekolahS;
        const nilaiHTL = document.getElementById('nilaiHTL');
        nilaiHTL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = false;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = true;
    } else {
        const namaHL = document.getElementById('namaHL');
        namaHL.innerHTML = namaS;
        const kelasHL = document.getElementById('kelasHL');
        kelasHL.innerHTML = kelasS;
        const sekolahHL = document.getElementById('sekolahHL');
        sekolahHL.innerHTML = sekolahS;
        const nilaiHL = document.getElementById('nilaiHL');
        nilaiHL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = true;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = false;
    }

    let harinya = hari();
    let waktunya = waktu();

    createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1(){
    indeks.innerHTML = 1;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soalPrev").hidden = true;
    document.getElementById("id1").hidden = false;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal2();" );
}

function soal2(){
    indeks.innerHTML = 2;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = false;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal1();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal3();" );
}

function soal3(){
    indeks.innerHTML = 3;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = false;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal2();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal4();" );
}

function soal4(){
    indeks.innerHTML = 4;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = false;
    document.getElementById("id5").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal3();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal5();" );
}

function soal5(){
    indeks.innerHTML = 5;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = true;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = false;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal4();" );
}