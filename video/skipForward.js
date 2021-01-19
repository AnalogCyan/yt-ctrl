(() => {
  const video = document.querySelector("video");
  video.currentTime = video.currentTime + 5;
  return video.currentTime;
})();
