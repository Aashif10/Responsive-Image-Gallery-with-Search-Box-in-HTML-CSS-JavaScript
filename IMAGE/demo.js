let clips = document.querySelectorAll("#clip");

for (let i = 0; i < clips.length; i++) {
  clips[i].addEventListener("mouseenter", function(e) {
    clips[i].play();
  });
  clips[i].addEventListener("mouseout", function(e) {
      clips[i].pause();
    });
}
