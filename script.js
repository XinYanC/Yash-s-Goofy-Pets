
// $('.adoptBtn').click( () => new Audio('mp3/audio.mp3').play() );


let petSelect = document.querySelector("#petselect");

petSelect.addEventListener("change", () => {
  console.log("New Selection!");
  let petSelect1 = document.querySelector("#petselect1");
  petSelect1.innerHTML = "<p>Pet selected: $" + petSelect.value + "<p>";
})

let serviceSelect = document.querySelector("#serviceselect");

petSelect.addEventListener("change", () => {
  console.log("New Selection!");
  let serviceSelect1 = document.querySelector("#serviceselect1");
  serviceSelect1.innerHTML = "<p>Service selected: $" + serviceSelect.value + "<p>";
})

let serviceSelect = document.querySelector("#serviceselect");

petSelect.addEventListener("change", () => {
  console.log("New Selection!");
  let serviceSelect1 = document.querySelector("#serviceselect1");
  serviceSelect1.innerHTML = "<p>Service selected: $" + serviceSelect.value + "<p>";
})