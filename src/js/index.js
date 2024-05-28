const button = document.getElementById("btn-select")
const elements = document.querySelector("#btn-select .buy-plattaforms")

button.addEventListener("click", (ev) => {
  ev.preventDefault;

  elements.classList.toggle("activty")

 /* if(elements.classList.contains("activty")) {
    elements.classList.remove("activty")
  } else {
    elements.classList.add("activty");
  }*/
 
});
