document.getElementById("menu-icon").addEventListener("click", function(){
	document.getElementById("navbar").classList.add("navbar--translate");
})

document.getElementById("menu_close").addEventListener("click", function(){
	document.getElementById("navbar").classList.remove("navbar--translate");
})

document.querySelector(".container_portfolio-image--overlay").addEventListener("click", function(){
	document.querySelector(".modal-content").style.display = "block";
	document.querySelector(".modal").style.opacity = "1";	
	document.querySelector(".modal").style.visibility = "visible";
})

document.querySelector(".modal-content_close").addEventListener("click", function(){
	document.querySelector(".modal-content").style.animation = "removeModal 1s";
	document.querySelector(".modal").style.opacity = "0";	
	document.querySelector(".modal").style.visibility = "hidden";
})