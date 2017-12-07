var pinkBox = document.getElementById("pinkbox")
var pinkBox2 = document.getElementById("pinkbox2")
var pinkBox3 =  document.getElementById("pinkbox3")

var blueMouse = pinkBox.onmouseover
var blueMouseOut = pinkBox.onmouseleave

function mouseOver() {
    if ( blueMouse === true )
        blueMouse.style.backgroundColor = 'red'
    else
        mouseOut()
}

function mouseOut() {
    blueMouseOut.style.backgroundColor = 'blue'
}

pinkBox.onmouseover = function() {
    pinkBox.style.backgroundColor = 'blue'
}

pinkBox2.onclick = function() {
    pinkBox2.style.backgroundColor = 'red'
}

pinkBox3.onmouseenter = function() {
    pinkBox3.style.backgroundColor = 'yellow'
}
