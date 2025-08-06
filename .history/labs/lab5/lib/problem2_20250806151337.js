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
    
    list.push(num);
  }
  return list;
}

function displayStats() {
  const list = readInput();
  const average = list.length > 0 ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2) : "0.00";
  const min = list.length > 0 ? Math.min(...list) : 0;
  const max = list.length > 0 ? Math.max(...list) : 0;

  const message = `Statistics:\nAverage: ${average}\nMin: ${min}\nMax: ${max}`;
  alert(message);
}


