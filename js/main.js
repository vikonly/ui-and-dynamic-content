
function ready(){	
	var items = document.getElementById("enter-item");
	var collectitems = document.getElementById("add-item");
	var itemssList = document.querySelectorAll(".output")[1];
	var clickableItem;
	
	var err = document.querySelector(".error");

	
	
	function handleitems(){
		
		var itemsItem = document.createElement("li");
		items.value = items.value.trim();
		items.focus();
		itemsItem.innerHTML = items.value;
		if(items.value !== ""){
			itemssList.appendChild(itemsItem);
			items.value = "";
			items.removeAttribute("class");
		} else {
			items.setAttribute("class", "error");
		}
		
		clickableItem = itemssList.children;
		for(var i=0; i<clickableItem.length; i+=1){
			clickableItem[i].addEventListener("click", handleClickItem, false);
		}
	}
    collectitems.addEventListener("click", handleitems, false);
	
	
	function handleClickItem(e){
		if(!e.currentTarget.getAttribute("class")){
			e.currentTarget.setAttribute("class", "cancel-item");
		} else {
			e.currentTarget.removeAttribute("class");
		}
	}
	
}
window.addEventListener("load", ready, false);