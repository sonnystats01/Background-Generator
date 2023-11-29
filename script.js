let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient");
let h3 = document.querySelector("h3");
let randomButton = document.querySelector("button");

function setGradient () {
	body.style.background = "linear-gradient(to right, " + color1.value
	 + ", " +
	  color2.value + ")";
	  css.textContent = body.style.background + ';';


}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColor);

setGradient();

function getRandomColor(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i = 0 ; i < 6 ; i++){
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

function setRandomColor(){

	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}