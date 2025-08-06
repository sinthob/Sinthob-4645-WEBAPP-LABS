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
  for (let i = 2; i <= limit; i++) {
    /* loop เพื่อเช็คว่า i เป็น prime หรือไม่ */
    let isPrime = true; // flag เพื่อเช็คว่าเป็น prime หรือไม่

    /* Math.sqrt(i) คือ รากที่ 2 ของ i */
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
          isPrime = false; // เจอตัวหาร ไม่ใช่ prime
          break; // ออกจาก inner loop
      }
      /*ยกตัวอย่าง กรณี i = 7
        j = 2: 7 % 2 = 1 (ไม่เท่ากับ 0) → ไม่หารลงตัว
        j = 3: 7 % 3 = 1 (ไม่เท่ากับ 0) → ไม่หารลงตัว
        j หยุดที่ 3 เพราะ Math.sqrt(7) ≈ 2.65
        ไม่เจอตัวหาร → 7 เป็นจำนวนเฉพาะ → primes.push(7) */
    }
    if (isPrime) {
        primes.push(i); // เพิ่มเข้า array ถ้าเป็น prime
    }
  }

  return primes;
}


/* =====  main function ===*/
function displayPrimes() {
  /* display results on webpage */
  let input;
  //รับ input เเล้วเช็คความถูกต้อง input ด้วย validateInput() //
  while (true) {
    input = prompt("Enter a positive integer number:");
    if (validateInput(input)) break;
    alert("Invalid input. Please enter a **positive integer**.");
  }

  /* เเปลง input เป็น number เเล้วนำเข้า findPrime เพื่อหาค่า prime*/
  const num = Number(input);
  const primes = findPrimes(num);

  
  /* เเสดงผลลัพธ์บน alert ตามตัวอย่าง lab*/
  messages = `for n = ${input} , Prime numbers are  ${primes.join(', ')}`;
  alert(messages);
}


