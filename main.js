
// var opensection = function(event) {
// 	// console.log("called opensection");
// var target = event.target;
// var paragraph = $(target).siblings("p");
// // console.log(paragraph);
// paragraph.toggleClass("invisible");

// };

// $(".title").on("click", opensection);

var opensection = function(event) {
	// console.log("called opensection");
var target = event.target;
var paragraph = $(target).siblings("p");
// console.log(paragraph);
paragraph.toggleClass("invisible");

};

$(".title").on("click", opensection);

