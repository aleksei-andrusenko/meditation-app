const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.video');

  //SOUNDS
  const sounds = document.querySelectorAll('sound-picker button');

  //TIME DISPLAY
  const timeDisplay = document.querySelector('time-display');

  //Get the length of the outline
  const outlineLength = outline.getTotalLength();

  //DURATION
  let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

  //PLAY SOUND
  play.addEventListener('click', ()=> {
    song.play();
  });
  
  //CREATE A FUNCTION SPECIFIC TO STOP AND PLAY THE SOUNDS
  const checkPlaying = song => {
    if(song.paused){
      song.play();
      video.play();
      play(song);
      
    } else {
      song.pause();
      video.pause();
      pause(song);
    }
  }

};

app();