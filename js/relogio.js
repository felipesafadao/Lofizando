var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('playlist', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
    });

    var stopButton = document.getElementById("stop-button");
    stopButton.addEventListener("click", function() {
        player.stopVideo();
    });

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
setInterval(function () {

  let novaHora = new Date();
  // getHours trará a hora
  // geMinutes trará os minutos
  // getSeconds trará os segundos
  let hora = novaHora.getHours();
  let minuto = novaHora.getMinutes();
  let segundo = novaHora.getSeconds();
  // Chamamos a função zero para que ela retorne a concatenação
  // com os minutos e segundos
  minuto = zero(minuto);
  segundo = zero(segundo);
  // Com o textContent, iremos inserir as horas, minutos e segundos
  // no nosso elemento HTML

  if (segundo % 2) {
    document.getElementById('relogio').innerHTML = ''
  } else {
    document.getElementById('relogio').innerHTML = `<p><b>${hora}:${minuto}</b></p>`
  }
}, 1000)

function zero(x) {
  if (x < 10) {
    x = '0' + x;
  } return x;
}
let arrayMusica = [
  'FxWOXOBPMBU',
  'RGXs5wsLyjs',
  'OwWdZic7apM',
]

let countMusica = -1

let iframe = document.getElementById('playlist')

let arrayPaisagem = [
  'https://i.pinimg.com/originals/7d/bd/0d/7dbd0d4c358c3c1498a619729729ee80.gif',
  'https://i.pinimg.com/originals/32/44/7e/32447e80862579ffd32acdd28186aeec.gif',
  'https://magenta.github.io/lofi-player/assets/background/rain-0.gif',
]

let count = 0;
function trocaPaisagem() {
  let div = document.getElementById('paisagens')
  console.log(count)
  if (arrayPaisagem.length == count) {
    count = 0
  }
  div.src = arrayPaisagem[count]
  count = count + 1
}

function fecharAdblock() {
  let adblockBox = document.getElementById('adblock-box')
  console.log(adblockBox)
  adblockBox.innerHTML = ""
  console.log(adblockBox)
}

function playBack() {
  if (countMusica > 0) {
    countMusica = countMusica - 1
  }
  iframe.src=arrayMusica[countMusica]
}
let icone = document.getElementById('pause-play')
let controlPlayPause = false 
function playPause() {
  controlPlayPause = !controlPlayPause
  if (controlPlayPause) {
  player.pauseVideo();
  icone.innerHTML = "▶"
  } else {
    player.playVideo();
    icone.innerHTML = "||"
  }
}


function playNext() {
  countMusica = countMusica + 1
  if (arrayMusica.length == countMusica) {
    countMusica = 0
  }
  console.log(arrayMusica[countMusica], arrayMusica.length, countMusica)
  iframe.src= 'https://www.youtube.com/embed/'+arrayMusica[countMusica]+'?autoplay=1&version=3&loop=1&playlist='+arrayMusica[countMusica]+'&enablejsapi=1&html5=1'
}
playNext()
//https://i.pinimg.com/originals/7d/bd/0d/7dbd0d4c358c3c1498a619729729ee80.gif
//https://i.pinimg.com/originals/32/44/7e/32447e80862579ffd32acdd28186aeec.gif
//https://magenta.github.io/lofi-player/assets/background/rain-0.gif