var x = new Audio("audio/audio1.mp3");
var y = new Audio("audio/audio2.mp3");
function playAudio() {
  x.play();
}
function pauseAudio() {
  x.pause();
}
function nextAudio(){
y.play();
}
function prevAudio(){
y.pause();
}
document.addEventListener("keydown", function(event){

  makeSound(event.key);
});


function makeSound(key){
  switch (key) {
    case "p":
    var p1 =  new Audio("audio/audio1.mp3");
    p1.play();
      break;
      case "b":
      var b1 =  new Audio("audio/audio1.mp3");
      b1.pause();
    break;
    case "e":
    var e1 =  new Audio("audio/audio2.mp3");
    e1.play();
    break;
    case "d":
    var e2 =  new Audio("audio/audio2.mp3");
    e2.pause();
    break;
}}
// //*function DurTime (e) {
// 	const {duration,currentTime} = e.srcElement;
// 	var sec;
// 	var sec_d;
//
// 	// define minutes currentTime
// 	let min = (currentTime==null)? 0:
// 	 Math.floor(currentTime/60);
// 	 min = min <10 ? '0'+min:min;
//
// 	// define seconds currentTime
// //	function get_sec (x) {
// 		if(Math.floor(x) >= 60){
//
// 			for (var i = 1; i<=60; i++){
// 				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
// 					sec = Math.floor(x) - (60*i);
// 					sec = sec <10 ? '0'+sec:sec;
// 				}
// 			}
// 		}else{
// 		 	sec = Math.floor(x);
// 		 	sec = sec <10 ? '0'+sec:sec;
// 		 }
// 	}
