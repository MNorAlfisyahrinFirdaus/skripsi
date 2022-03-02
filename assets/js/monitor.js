let mouse = 0;

var x = document.getElementById("myAudio"); 

var t=setInterval(tes,1000);
function mouseTes() {
   x.pause();
   x.currentTime = 0;
   t=setInterval(tes,1000);
}
function tes() {
   if (mouse < 300000) {
      mouse += 1000;
   } else {
      clearInterval(t);
      x.play();
      $('#mouseModal').modal('show')
   }
}

document.addEventListener('mouseout', async function(e){
   if (!e) {
      console.log("Bergerak");
   } else {
      mouse = 0;
   }
});