const link = document.querySelector('img');
link.alt = "Faculty of Engineering, KKU";
link.src = "https://www.en.kku.ac.th/web/wp-content/uploads/2015/09/com22-1024x683.jpg";


// สร้าง element ใหม่เพื่อครอบ Link ใส่รูป
const pictureLink = document.createElement('a')
pictureLink.setAttribute("id", "parent")

document.body.appendChild(pictureLink)
pictureLink.append(link)

const enLink = document.querySelector('a')
enLink.href = "http://www.en.kku.ac.th"