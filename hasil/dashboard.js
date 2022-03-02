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
const dbhasil = db.ref('db_kuis1/').on('value', kuis1Success, handleError)
const dbkuis1 = db.ref('db_kuis2/').on('value', kuis2Success, handleError)
const dbkuis2 = db.ref('db_kuis3/').on('value', kuis3Success, handleError)
const dbkuis3 = db.ref('db_kuis4/').on('value', kuis4Success, handleError)
const dbkuis4 = db.ref('db_hasil/').on('value', hasilSuccess, handleError)

let pk1 = 0;
let perk1 = 0;
let pk2 = 0;
let perk2 = 0;
let pk3 = 0;
let perk3 = 0;
let pk4 = 0;
let perk4 = 0;
let pev = 0;
let perev = 0;

let loop1;
let loop2;
let loop3;
let loop4;
let loop5;

function kuis1Success(items1) {

    loop1 = items1.val();
    let i = 0;
    while (i < loop1.length) {
        if (loop1[i] != undefined) {
            pk1 += 1;
        }
        i++;
    }
    // console.log(items.val());
    // pk1 = items1.val().length;

    perk1 = (pk1/25)*100;
    
    const tk1 = document.querySelector('.tk1');
    tk1.innerHTML = pk1;
    
    const pbk1 = document.querySelector('.pbk1');
    pbk1.innerHTML = `<div class="progress-bar bg-info" role="progressbar"
                    style="width: ${perk1}%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>`

}

function kuis2Success(items2) {
    loop2 = items2.val();
    let i = 0;
    while (i < loop2.length) {
        if (loop2[i] != undefined) {
            pk2 += 1;
        }
        i++;
    }

    perk2 = (pk2/25)*100;
    
    const tk2 = document.querySelector('.tk2');
    tk2.innerHTML = pk2;
    
    const pbk2 = document.querySelector('.pbk2');
    pbk2.innerHTML = `<div class="progress-bar bg-info" role="progressbar"
                    style="width: ${perk2}%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>`

}

function kuis3Success(items3) {
    loop3 = items3.val();
    let i = 0;
    while (i < loop3.length) {
        if (loop3[i] != undefined) {
            pk3 += 1;
        }
        i++;
    }

    perk3 = (pk3/25)*100;
    
    const tk3 = document.querySelector('.tk3');
    tk3.innerHTML = pk3;
    
    const pbk3 = document.querySelector('.pbk3');
    pbk3.innerHTML = `<div class="progress-bar bg-info" role="progressbar"
                    style="width: ${perk3}%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>`

}

function kuis4Success(items4) {
    loop4 = items4.val();
    let i = 0;
    while (i < loop4.length) {
        if (loop4[i] != undefined) {
            pk4 += 1;
        }
        i++;
    }

    perk4 = (pk4/25)*100;
    
    const tk4 = document.querySelector('.tk4');
    tk4.innerHTML = pk4;
    
    const pbk4 = document.querySelector('.pbk4');
    pbk4.innerHTML = `<div class="progress-bar bg-info" role="progressbar"
                    style="width: ${perk4}%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>`

}

function hasilSuccess(items) {
    loop5 = items.val();
    let i = 0;
    while (i < loop5.length) {
        if (loop5[i] != undefined) {
            pev += 1;
        }
        i++;
    }

    perev = (pev/25)*100;
    
    const tev = document.querySelector('.tev');
    tev.innerHTML = pev;
    
    const pbev = document.querySelector('.pbev');
    pbev.innerHTML = `<div class="progress-bar bg-warning" role="progressbar"
                    style="width: ${perev}%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>`

}


function handleError(error) {
    console.log(error);
}