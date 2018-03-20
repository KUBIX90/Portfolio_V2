document.querySelector("#menu-icon").addEventListener("click", function(){
	document.querySelector("#navbar").style.transform = "translateX(0%)";
})

document.querySelector(".close").addEventListener("click", function(){
	document.querySelector("#navbar").style.transform = "translateX(-100%)";
})

document.querySelector(".project_image-overlay").addEventListener("click", function(){
	document.querySelector(".content").style.animation = "showModal 1s";
	document.querySelector("#modals").style.opacity = "1";	
	document.querySelector("#modals").style.visibility = "visible";
})

document.querySelector(".modal_close-content").addEventListener("click", function(){
	document.querySelector(".content").style.animation = "removeModal 1s";
	document.querySelector("#modals").style.opacity = "0";	
	document.querySelector("#modals").style.visibility = "hidden";
})