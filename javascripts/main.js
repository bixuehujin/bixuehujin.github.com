window.onload = function() {
	var ids = document.getElementsByTagName('a');
	for(i in ids) {
		ids[i].target = '_blank'
	}
}
