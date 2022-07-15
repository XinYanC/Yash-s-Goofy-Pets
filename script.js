
// $('.adoptBtn').click( () => new Audio('mp3/audio.mp3').play() );


let petSelect = document.querySelector("#petselect");

let taxX = document.querySelector("#tax");
let totalL = document.querySelector("#total");

let tot = 20;
let taxtot = 0;
let totot = 0;


petSelect.addEventListener("change", () => {
  console.log("New Selection!");
  let petSelect1 = document.querySelector("#petselect1");
  petSelect1.innerHTML = "<p>Pet selected: $" + petselect.value + "<p>";
  tot += Number(petselect.value);
  console.log(tot);
  taxtot += Number(tot) * 0.0875;
  console.log(taxtot);
  roundtax = Math.round(100* Number(taxtot))/100;
  console.log(roundtax);
  totot = Number(taxtot) + Number(tot);
  console.log(totot);
  roundtotot = Math.round(100* Number(totot))/100;
  taxX.innerHTML = "<p>Tax: $" + Number(roundtax) + "<p>";
  totalL.innerHTML = "<p>$" + Number(roundtotot) + "</p>";
})

let serviceSelect = document.querySelector("#serviceselect");

serviceSelect.addEventListener("change", () => {
  console.log("New Selection!");
  let serviceSelect1 = document.querySelector("#serviceselect1");
  serviceSelect1.innerHTML = "<p>Service selected: $" + serviceselect.value + "<p>";
  tot += Number(serviceselect.value);
  console.log(tot);
  taxtot += Number(tot) * 0.0875;
  console.log(taxtot);
  roundtax = Math.round(100* Number(taxtot))/100;
  console.log(roundtax);
  totot = Number(taxtot) + Number(tot);
  console.log(totot);
  roundtotot = Math.round(100* Number(totot))/100;
  taxX.innerHTML = "<p>Tax: $" + Number(roundtax) + "<p>";
  totalL.innerHTML = "<p>$" + Number(roundtotot) + "</p>";
})

let delieverySelect = document.querySelector("#delieveryselect");

delieverySelect.addEventListener("change", () => {
  console.log("New Selection!");
  let delieverySelect1 = document.querySelector("#delieveryselect1");
  delieverySelect1.innerHTML = "<p>Delievery selected: $" + delieveryselect.value + "<p>";
  tot += Number(delieveryselect.value);
  console.log(tot);
  taxtot += Number(tot) * 0.0875;
  console.log(taxtot);
  roundtax = Math.round(100* Number(taxtot))/100;
  console.log(roundtax);
  totot = Number(taxtot) + Number(tot);
  console.log(totot);
  roundtotot = Math.round(100* Number(totot))/100;
  taxX.innerHTML = "<p>Tax: $" + Number(roundtax) + "<p>";
  totalL.innerHTML = "<p>$" + Number(roundtotot) + "</p>";
})

