/////////////////////////////////////////////

document.title = "KKU Engineering"

// Apply styles
const para = document.querySelector('p');
para.innerHTML = 'We hope you enjoy learning';

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '350px';
para.style.textAlign = 'center';
para.style.fontSize = '25px';



// สร้าง element ใหม่มาใส่ ครอบ img ( section --> a --> img)

let pictureContainer = document.createElement('a');

// เพิ่มใน DOM โดยเรียงลำดับให้ภาพขึ้นก่อน เเละต้อง append pictureContainer ก่อน append รูปภาพใน pictureContainer 
// append child เรียตามลำดับ section --> pictureContainer --> img 
document.querySelector('section').appendChild(pictureContainer);
document.querySelector('section').appendChild(para)

// ใส่ลิงก์รูปคณะวิศวกรรมให้ img 
const link = document.querySelector('img');
link.alt = "Faculty of Engineering, KKU";
link.src = "https://www.en.kku.ac.th/web/wp-content/uploads/2015/09/com22-1024x683.jpg";


// ใส่รูปภาพลงใน a ให้ รูปภาพสามารถคลิ้กลิงก์จาก a ได้
document.querySelector('a').appendChild(link)

const enLink = document.querySelector('a')
enLink.href = "http://www.en.kku.ac.th"




