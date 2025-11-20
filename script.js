// --- Barra di progresso ---
function updateProgress() {
    const value = document.getElementById("progressInput").value;
    const bar = document.getElementById("progressBar");

    let number = parseInt(value);

    // Limita ai valori validi
    if (number < 0) number = 0;
    if (number > 100) number = 100;

    bar.style.width = number + "%";
    bar.innerText = number + "%";
}

// --- Calcolatrice ---
function calculate() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("operator").value;
    const resultSpan = document.getElementById("result");

    if (isNaN(n1) || isNaN(n2)) {
        resultSpan.textContent = "Inserisci numeri validi!";
        return;
    }

    let result;

    switch (op) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/":
            result = n2 !== 0 ? n1 / n2 : "Errore: divisione per zero!";
            break;
        default:
            result = "Operatore non valido!";
    }

    resultSpan.textContent = result;
}
