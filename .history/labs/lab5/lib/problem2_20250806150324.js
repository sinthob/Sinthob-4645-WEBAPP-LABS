function isPositiveInteger(input) {
  const num = Number(input);
  return Number.isInteger(num) && num > 0;
}

function isNegativeInteger(input) {
  const num = Number(input);
  return Number.isInteger(num) && num < 0;
}

function readInput() {
  const list = [];
  while (true) {
    let input = prompt("Enter a positive integer (enter negative to stop):");
    if (isNegativeInteger(input)) break;
    if (!isPositiveInteger(input)) {
      alert("Invalid input. Please enter a **positive integer**.");
      continue;
    }
    list.push(Number(input));
  }
  return list;
}

function displayStats(list) {
  const resultDiv = document.getElementById("result");
  const average = list.length > 0 ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2) : "0.00";
  const min = list.length > 0 ? Math.min(...list) : 0;
  const max = list.length > 0 ? Math.max(...list) : 0;

  resultDiv.innerHTML = `
    <p><strong>Statistics:</strong></p>
    <p>Average: ${average}</p>
    <p>Min: ${min}</p>
    <p>Max: ${max}</p>
  `;
}

function runStatistics() {
  const list = readInput();
  displayStats(list);
}
