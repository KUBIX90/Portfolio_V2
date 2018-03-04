document.getElementById("menu-icon").addEventListener("click", function(){
	document.getElementById("navbar").classList.add("navbar--translate");
})

document.getElementById("menu_close").addEventListener("click", function(){
	document.getElementById("navbar").classList.remove("navbar--translate");
})