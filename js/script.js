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
    // Se è sia multiplo di 3 che di 5 aggiunge:
    box.innerText = "FizzBuzz";
    // A questi aggiunge la classe richiamata dal css
    box.classList.add("fizzbuzz");
  } else if (i % 5 === 0) {
    // Se è multiplo di 5 aggiunge:
    box.innerText = "Buzz";
    // A questi aggiunge la classe richiamata dal css
    box.classList.add("buzz");
  } else if (i % 3 === 0) {
    // Se è multiplo di 3 aggiunge:
    box.innerText = "Fizz";
    // A questi aggiunge la classe richiamata dal css
    box.classList.add("fizz");
  } else {
    // Aggiunge i numeri restanti.
    box.innerText = i;
    // A questi aggiunge la classe richiamata dal css
    box.classList.add("number");
  }

  // Aggiungo "box" come figlio di container
  container.appendChild(box);
}
