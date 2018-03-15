document.querySelector("#menu-icon").addEventListener("click", function(){
	document.querySelector("#navbar").style.transform = "translateX(0%)";
})

document.querySelector(".close").addEventListener("click", function(){
	document.querySelector("#navbar").style.transform = "translateX(-100%)";
})

document.querySelector(".container_portfolio-image--overlay").addEventListener("click", function(){
	document.querySelector(".modal-content").style.animation = "showModal 1s";
	document.querySelector(".modal").style.opacity = "1";	
	document.querySelector(".modal").style.visibility = "visible";
})

document.querySelector(".modal-content_close").addEventListener("click", function(){
	document.querySelector(".modal-content").style.animation = "removeModal 1s";
	document.querySelector(".modal").style.opacity = "0";	
	document.querySelector(".modal").style.visibility = "hidden";
})