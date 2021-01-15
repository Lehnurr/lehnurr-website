function windowScroll() {
	let topDistance = document.querySelector("#lehn-nurr-head").getBoundingClientRect().top
	
	if(topDistance == 0){
		$("#lehnurr-head").css("opacity", "1");
		$(".names").css("opacity", "0");
		
		$("#lehn-nurr-head.felix").css("border-right", "0")
		$("#lehn-nurr-head.felix").css("padding-right", "0.5vw");
		$("#lehn-nurr-head.silas").css("border-left", "0");
		$("#lehn-nurr-head.silas").css("padding-left", "0.5vw");
	}
	else{
		$("#lehnurr-head").css("opacity", "0");
		$("div.names").css("opacity", "1");

		$("#lehn-nurr-head.felix").css("border-right", "0.1vw solid black")
		$("#lehn-nurr-head.felix").css("padding-right", "0.4vw");
		$("#lehn-nurr-head.silas").css("border-left", "0.1vw solid black");
		$("#lehn-nurr-head.silas").css("padding-left", "0.4vw");
	}
}

$(document).ready(function() {
	window.addEventListener("scroll", windowScroll);
});
