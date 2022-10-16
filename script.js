function download() {
	// in dev
}

sidebar_visible = true;

function openNav() {
	if (sidebar_visible === true) {
		document.getElementById("older_nav").style.width = "160px";
		document.getElementById("main").style.marginLeft = "160px";
		sidebar_visible = false;
	} else {
		document.getElementById("older_nav").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		sidebar_visible = true;
	}
    
}