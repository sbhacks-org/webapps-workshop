document.getElementById("create-meme").addEventListener("click", function () {
  const topText = document.getElementById("top-text-input").value;
  document.getElementById("top-text").innerText = topText;

  const bottomText = document.getElementById("bottom-text-input").value;
  document.getElementById("bottom-text").innerText = bottomText;

  const imgSrc = document.getElementById("img-src-input").value;
  if (imgSrc) {
  	document.getElementById("meme-pic").src = imgSrc;
  }
});