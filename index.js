// $("#create-meme").click(function () {
//   const topText = $("#top-text-input").val();
//   $("#top-text").text(topText);

//   const bottomText = $("#bottom-text-input").val();
//   $("#bottom-text").text(bottomText);
// });

document.getElementById("create-meme").addEventListener("click", function () {
  const topText = document.getElementById("top-text-input").value;
  document.getElementById("top-text").innerText = topText;

  const bottomText = document.getElementById("bottom-text-input").value;
  document.getElementById("bottom-text").innerText = bottomText;
});