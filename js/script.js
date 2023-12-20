// console.log("js ok");

// 1) Stampiamo in console un programma che generi i numeri da 1 a 100
// 2 Controlliamo se i numeri siano multipli di 3 5 o entrambi

const container = document.getElementById("big-box");

for (let i = 1; i <= 100; i++) {
  // Creo tramite JS un nuovo elemento html
  const box = document.createElement("div");
  // Aggiungo ad ogni "div" creato la classe "box"
  box.classList.add("box");

  if (i % 3 === 0 && i % 5 === 0) {
    box.innerText = "FizzBuzz";
    box.classList.add("fizzbuzz");
  } else if (i % 5 === 0) {
    box.innerText = "Buzz";
    box.classList.add("buzz");
  } else if (i % 3 === 0) {
    box.innerText = "Fizz";
    box.classList.add("fizz");
  } else {
    box.innerText = i;
    box.classList.add("number");
  }

  container.appendChild(box);
}
