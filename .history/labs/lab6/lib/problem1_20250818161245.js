// สร้าง element ใหม่มาใส่ ครอบ img ( section --> a --> img)

let pictureContainer = document.createElement('a');


// ใส่ลิงก์รูปคณะวิศวกรรมให้ img 
const link = document.querySelector('img');
link.alt = "Faculty of Engineering, KKU";
link.src = "https://www.en.kku.ac.th/web/wp-content/uploads/2015/09/com22-1024x683.jpg";


// ใส่รูปภาพลงใน a ให้ รูปภาพสามารถคลิ้กลิงก์จาก a ได้
document.querySelector('a').appendChild(link)

const enLink = document.querySelector('a')
enLink.href = "http://www.en.kku.ac.th"



/////////////////////////////////////////////

// Apply styles
const para = document.querySelector('p');
para.textContent = 'We hope you enjoy learning';

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';


// Append to DOM
document.querySelector('section').appendChild(pictureContainer);
document.querySelector('section').appendChild(para);
document.querySelector('section').appendChild(pictureContainer);