var audio01 = new Audio("../sfx/Kasper_01.wav")
audio01.volume = 0.05
var audio02 = new Audio("../sfx/Kasper_02.wav")
audio02.volume = 0.1

setTimeout(function() {
    audio02.play();
}, 2500)

setTimeout(function() {
    audio01.play();
}, 5000)