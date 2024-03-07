
function togglePlayPause(audio, button) {
  if (audio.paused) {
    audio.play();
    button.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    button.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function setupSong(playButtonId, audioSource) {
  var playButton = document.getElementById(playButtonId);
  var audio = new Audio(audioSource);

  playButton.addEventListener('click', function () {
    togglePlayPause(audio, playButton);
  });
}

setupSong('playButton1', 'C:/Users/ganes/Downloads/Mohabbat Barsa Dena Tu [128] Kbps-(SongsPk.com.se).mp3');
setupSong('playButton2', 'C:/Users/ganes/Downloads/Two Hearts - TrackTribe.mp3');
setupSong('playButton3', 'C:/Users/ganes/Downloads/Sweethearts - TrackTribe.mp3');
setupSong('playButton4', 'C:Users/ganes/Downloads/Nature Nurture - Quincas Moreira.mp3');

