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

let idnya = [];

let ujicoba = document.getElementById('ujicoba');

let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolahnya = document.getElementById('sekolah');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
// datahasil = kuisnya.value;


function mencari() {
    datahasil = ujicoba.value;
    var task = firebase.database().ref(datahasil);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "IX A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IX B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IX C";
    } else if (kelasnya.value == "4") {
        kelasfix = "IX D";
    } else if (kelasnya.value == "5") {
        kelasfix = "IX E";
    } else if (kelasnya.value == "6") {
        kelasfix = "IX F";
    } else if (kelasnya.value == "7") {
        kelasfix = "IX G";
    } 

    if (sekolahnya.value == "1") {
        sekolahfix = "SMPN 33 Banjarmasin";
    }

    if ((kelasfix != '')&&(sekolahfix != '')) {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();
           
            if ((kelasfix == taskvalue.kelas)&&(sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                                    <td class="ukr1">${taskvalue.nama}</td>
                                    <td class="ukr3">${taskvalue.kelas}</td>
                                    <td class="ukr1">${taskvalue.sekolah}</td>
                                    <td class="ukr3"><a href='${taskvalue.link}'>${taskvalue.link}</a></td>
                                    <td class="ukr3" id="nilai${taskvalue.id}">${taskvalue.nilai}</td>
                                    <td class="ukr2">${taskvalue.hari}</td>
                                    <td class="ukr2">${taskvalue.waktu}</td>
                                    <td class="hps" onclick ="edit(${taskvalue.id})"><button type="button" class="badge badge-success"><span class='fa fa-edit'></span> Edit</button></td>
                                    <td class="hps" onclick ="hapus(${taskvalue.id})"><button type="button" class="badge badge-danger"><span class='fa fa-trash-alt'></span> Hapus</button></td>
                                </tr>`;
                idnya.push(taskvalue.id);
            }

            if (cek11 == 0) {
                let hpsAll = document.querySelector('.center');
                hpsAll.innerHTML += '';
                hpsAll.innerHTML += `<button type="button" class="btn btn-danger deleted"><span class="fas fa-trash-alt"></span> Hapus Semua Data</button>`;
                cek11 += 1;

                let klik = document.querySelector('.deleted');
                klik.addEventListener('click', function () {
                    hapussemua(id);
                })
            }

        });
    } else {
        $('#ModalFilter').modal('show')
    }
}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    ujicoba = document.getElementById('ujicoba');
    kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}

function hapus(id) {
    $('#ModalHapus').modal('show');
    document.querySelector('.yakin').setAttribute('onclick',`deletetask(${id})`)
}

function deletetask(id) {
    var task = firebase.database().ref(datahasil + id);
    task.remove();
    tmp.innerHTML = "";
    mencari();

    $('#ModalHapus').modal('hide');
}

function edit(id) {
    datahasil = ujicoba.value;
    var task = firebase.database().ref(datahasil);
    task.on('value', function (data){
        task = data.val()
        // console.log(task[id]['nilai']);
        nilai = task[id]['nilai'];
        const nilaiinput = document.querySelector('.nilai');
        nilaiinput.value = nilai;
    });
    $('#ModalEdit').modal('show');
    document.querySelector('.yakin2').setAttribute('onclick',`edittask(${id})`)
}

// document.addEventListener('click', async function(e){
//     console.log(e.target);
// });

function edittask(idnya) {
    datahasil = ujicoba.value;
    var task = firebase.database().ref(datahasil);
    task.on('value', function (data){
        task = data.val()
        let namanya = task[idnya]['nama'];
        let kelasnya = task[idnya]['kelas'];
        let linknya = task[idnya]['link'];
        let sekolahnya = task[idnya]['sekolah'];
        let waktunya = task[idnya]['waktu'];
        let harinya = task[idnya]['hari'];

        let nilainya = document.getElementById('nilai').value;


        var updatetask = {
            id: idnya,
            sekolah: sekolahnya,
            nama: namanya,
            kelas: kelasnya,
            link: linknya,
            nilai: nilainya,
            waktu: waktunya,
            hari: harinya
            }
        let database = firebase.database().ref(datahasil + idnya);
        database.set(updatetask);

        $('#ModalEdit').modal('hide');
        setTimeout(function(){ 
            const nilaiup = document.querySelector(`#nilai${idnya}`);
            nilaiup.innerHTML = nilainya;
         }, 1000);
    });
}

function hapussemua(id) {
    $('#ModalHapusAll').modal('show');
    document.querySelector('.yakinAll').setAttribute('onclick',`deletesemua(${id})`)
}

function deletesemua(id) {
    var task = firebase.database().ref(datahasil + id);
    task.remove();
    tmp.innerHTML = "";
    mencari();

    $('#ModalHapusAll').modal('hide');
}

// download data
function downloadfile(){
    
    if (kelasnya.value == "1") {
        kelasfix = "IX A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IX B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IX C";
    } else if (kelasnya.value == "4") {
        kelasfix = "IX D";
    } else if (kelasnya.value == "5") {
        kelasfix = "IX E";
    } else if (kelasnya.value == "6") {
        kelasfix = "IX F";
    } else if (kelasnya.value == "7") {
        kelasfix = "IX G";
    } 

    if (sekolahnya.value == "1") {
        sekolahfix = "SMPN 33 Banjarmasin";
    }

    document.querySelector('.download');
    // download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');

    if (table_div.rows.length <= 1) {
        $('#ModalDownload').modal('show')
    } else {
        var table_html = table_div.outerHTML.replace(/ /g, '%20');
        
        var a = document.createElement('a');
        a.href = data_type + ', ' + table_html;
        a.download = `Praktikum_${sekolahfix}_${kelasfix}.xls`;
        a.click();
    }
}