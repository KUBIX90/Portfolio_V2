var select = document.querySelector.bind(document);

select("#menu-icon").addEventListener("click", function(){
	select("#navbar").style.transform = "translateX(0%)";
})

select(".close").addEventListener("click", function(){
	select("#navbar").style.transform = "translateX(-100%)";
})