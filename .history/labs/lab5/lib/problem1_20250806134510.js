/* ===== helper functions สำหรับไปใช้ใน main function ===*/
function validateInput(input) { 
  /* validate if input is positive integer */
  const num = Number(input);  // เเปลง input เป็น number
  
  /* retrun ค่า ถ้า input เป็น integer เเละค่ามากกว่า 0 */
  return Number.isInteger(num) && num > 0;
}

function findPrimes(limit) {
  /* find all primes up to limit */
  /* ใช้ loop กับ array ตามชีทเเลป */

  /* สร้าง array สำหรับเก็บ prime numbers เพื่อรอ return*/
  const primes = [];

  /* loop เพื่อหาค่า prime numbers ใส่ใน Array*/
  /* prime ตัวเเรกคือ 2 จึงวน ลูปข้างนอก เริ่มจาก 2 จนถึง limit(หรือค่าสูงสุดที่รับ inputเข้ามา)*/
  nextPrime: for (let i = 2; i <= limit; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) continue nextPrime;
    }
    primes.push(i);
  }

  return primes;
}

function displayPrimes(primes, limit) {
  /* display results on webpage */
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Prime numbers up to <strong>${limit}</strong>:</p><p>${primes.join(', ')}</p>`;
}


/* =====  main function ===*/
function runPrimeFinder() {
  let input;
  while (true) {
    input = prompt("Enter a positive integer number:");
    if (validateInput(input)) break;
    alert("Invalid input. Please enter a **positive integer**.");
  }
  const num = Number(input);
  const primes = findPrimes(num);
  displayPrimes(primes, num);
}
