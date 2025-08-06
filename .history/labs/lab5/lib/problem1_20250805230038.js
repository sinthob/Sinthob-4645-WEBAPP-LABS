function validateInput(input) {
  const num = Number(input);
  return Number.isInteger(num) && num > 0;
}

function findPrimes(limit) {
  const primes = [];
  nextPrime: for (let i = 2; i <= limit; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) continue nextPrime;
    }
    primes.push(i);
  }
  return primes;
}

function displayPrimes(primes, limit) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Prime numbers up to <strong>${limit}</strong>:</p><p>${primes.join(', ')}</p>`;
}