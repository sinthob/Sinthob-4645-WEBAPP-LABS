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
  
  if (list.length === 0) {
    alert("No valid numbers entered.");
    return;
  }
  
  const sum = list.reduce((a, b) => a + b, 0);
  const average = (sum / list.length).toFixed(2);
  const min = Math.min(...list);
  const max = Math.max(...list);

  const message = `Statistics:\nAverage: ${average}\nMin: ${min}\nMax: ${max}`;
  alert(message);
}


