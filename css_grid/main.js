var pinkBox = document.getElementById("pinkbox")
var pinkBox2 = document.getElementById("pinkbox2")
var pinkBox3 =  document.getElementById("pinkbox3")

pinkBox.onmouseover = function() {
    pinkBox.style.backgroundColor = 'blue'
}

pinkBox2.onclick = function() {
    pinkBox2.style.backgroundColor = 'red'
}

pinkBox3.onmouseenter = function() {
    pinkBox3.style.backgroundImage = "url('smiling-face.png')"
}