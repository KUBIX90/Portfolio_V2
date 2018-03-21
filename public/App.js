var select = document.querySelector.bind(document);

select("#menu-icon").addEventListener("click", function(){
	select("#navbar").style.transform = "translateX(0%)";
})

select(".close").addEventListener("click", function(){
	select("#navbar").style.transform = "translateX(-100%)";
})

/*select(".project_image-overlay").addEventListener("click", function(){
	select(".content").style.animation = "showModal 1s";
	select("#modals").style.opacity = "1";	
	select("#modals").style.visibility = "visible";
})

select(".modal_close-content").addEventListener("click", function(){
	select(".content").style.animation = "removeModal 1s";
	select("#modals").style.opacity = "0";	
	select("#modals").style.visibility = "hidden";
})*/