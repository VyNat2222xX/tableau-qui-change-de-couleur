/* QUERRY SELECTORS */

const $tile1 = document.querySelector("#btn1");
const $tile2 = document.querySelector("#btn2");
const $tile3 = document.querySelector("#btn3");
const $tile4 = document.querySelector("#btn4");
const $tile5 = document.querySelector("#btn5");
const $tile6 = document.querySelector("#btn6");
const $tile7 = document.querySelector("#btn7");
const $tile8 = document.querySelector("#btn8");
const $tile9 = document.querySelector("#btn9");

/* CLICK GAUCHE */

$tile1.addEventListener("click", () => {
	$tile1.classList.remove("green");
	$tile1.classList.add("red");
});

$tile2.addEventListener("click", () => {
	$tile2.classList.remove("green");
	$tile2.classList.add("red");
});

$tile3.addEventListener("click", () => {
	$tile3.classList.remove("green");
	$tile3.classList.add("red");
});

$tile4.addEventListener("click", () => {
	$tile4.classList.remove("green");
	$tile4.classList.add("red");
});

$tile5.addEventListener("click", () => {
	$tile5.classList.remove("green");
	$tile5.classList.add("red");
});

$tile6.addEventListener("click", () => {
	$tile6.classList.remove("green");
	$tile6.classList.add("red");
});

$tile7.addEventListener("click", () => {
	$tile7.classList.remove("green");
	$tile7.classList.add("red");
});

$tile8.addEventListener("click", () => {
	$tile8.classList.remove("green");
	$tile8.classList.add("red");
});

$tile9.addEventListener("click", () => {
	$tile9.classList.remove("green");
	$tile9.classList.add("red");
});

/* CLICK DROIT */

$tile1.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile1.classList.add("green");
	$tile1.classList.remove("red");
});

$tile2.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile2.classList.add("green");
	$tile2.classList.remove("red");
});

$tile3.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile3.classList.add("green");
	$tile3.classList.remove("red");
});

$tile4.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile4.classList.add("green");
	$tile4.classList.remove("red");
});

$tile5.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile5.classList.add("green");
	$tile5.classList.remove("red");
});

$tile6.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile6.classList.add("green");
	$tile6.classList.remove("red");
});

$tile7.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile7.classList.add("green");
	$tile7.classList.remove("red");
});

$tile8.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile8.classList.add("green");
	$tile8.classList.remove("red");
});

$tile9.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	$tile9.classList.add("green");
	$tile9.classList.remove("red");
});
