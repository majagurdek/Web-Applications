var modal_1 = document.querySelector(".modal");
var modal_2 = document.querySelector(".modalImage");

Array.from(document.querySelectorAll(".Images")).forEach(item => {
   item.addEventListener("click", event => {
      modal_1.style.display = "block";
      modal_2.src = event.target.src;
   });
});


document.querySelector(".close").addEventListener("click", () => {
   modal_1.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal_1) {
    modal_1.style.display = "none";
  }
}