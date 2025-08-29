// DOM creation and manipulation methods

document.body.style.backgroundColor = 'black'  // เปลี่ยนสี body สเป็นสีดำก่อน


// สร้าง planet เเล้วใส่ css ตามด้วยเพิ่มลงใน body
const planet = document.createElement('div') ;      
planet.classList.add('planet') ;


// สร้าง moon, ใส่ css เเล้วทำให้เป็นลูกของ planet
const moon = document.createElement('div') ;
moon.classList.add('moon') ;
planet.appendChild(moon);



// สร้าง div สำหรับ text "The planet nd the moon"
const text = document.createElement('div') ;
text.style.color  = 'white' ;
text.textContent = 'The planet and the moon' ;
text.style.fontSize = '30px' ;
text.style.marginLeft = '15px' ;



// เพิ่ม planet กับ text ลงใน body ตามลำดับ
document.body.appendChild(planet);
document.body.appendChild(text);


