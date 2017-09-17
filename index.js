$(window).keypress(function(e) {
  var video = document.getElementById("video");
  if (e.which == 32 || 75) {
    if (video.paused == true)
      video.play();
    else
      video.pause();
  }
});
$(".video").prop("volume", 0.5);
