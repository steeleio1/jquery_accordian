







// var acc = document.getElementsByClassName("sectionbox");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     }
// }





var opensection = function(event) {
	console.log("called opensection");
var target = event.target;
var paragraph = $(target).siblings("sectionbox");
	console.log(paragraph);
paragraph.toggleClass("title");

}; 


$(".sectionbox").on("click", opensection);






// var opensection = function(event) {
// 	// console.log("called opensection");
// var target = event.target;
// var paragraph = $(target).siblings("p");
// // console.log(paragraph);
// paragraph.toggleClass("invisible");

// };


// $(".title").on("click", opensection);