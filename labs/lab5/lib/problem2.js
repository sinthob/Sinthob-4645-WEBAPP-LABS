function readInput() {
  const list = [];
  while (true) {
    let input = prompt("Enter a positive integer (enter negative to stop):");
    const num = Number(input);
    
    // ตรวจสอบว่าเป็นจำนวนเต็มลบ (หยุดการป้อนข้อมูล)
    if (Number.isInteger(num) && num < 0) break;
    
    // ตรวจสอบว่าเป็นจำนวนเต็มบวก
    if (!Number.isInteger(num) || num <= 0) {
      alert("Invalid input. Please enter a **positive integer**.");
      continue;
    }
    
    //สะสม input ใน list
    list.push(num);
  }
  return list;
}


function displayStats() {
  const list = readInput();
  
  // ตรวจสอบว่ามีข้อมูลใน list หรือไม่
  if (list.length === 0) {
    alert("No valid numbers entered.");
    return;
  }
  
  const sum = list.reduce((a, b) => a + b, 0);     // reduce ใช้สำหรับหาผลรวมของ list
  const average = (sum / list.length).toFixed(2);  // toFixed(2) ใช้สำหรับทำให้ค่าเฉลี่ยมีทศนิยม 2 ตำแหน่ง
  const min = Math.min(...list);   // ใช้ spread operator (...) เพราะแปลง array เป็น arguments , Math ไม่รับ array ตรงๆ
  const max = Math.max(...list);

  const message = `For the list ${list}, the average is ${average}, the minimum is ${min}, and the maximum is ${max}`;
  alert(message);
}


