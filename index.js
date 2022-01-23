const btn = document.getElementById("button");
const colors = ["Bisque", "Aqua", "Crimson", "Gold", "Gray", "Yellow", "Magenta", "Teal", "Green", "Orange", "Violet", "Black", "Brown", "Indigo", "Maroon", "white"];
const txt = document.getElementById("color-text");
btn.addEventListener("click",myFun);

function myFun(){
   let randomColor = colors[Math.floor(Math.random()*colors.length)];
   document.body.style.backgroundColor = randomColor;
   txt.style.color = randomColor;
   txt.innerHTML = randomColor;
}













