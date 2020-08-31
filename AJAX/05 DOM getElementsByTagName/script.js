var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.txt");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
	// Selecting all the li elements
	var modify = document.getElementsByTagName("li");
	// Editing the inner HTML of the li elements
    for (var i = 0; i < modify.length; i++) {
      modify[i].innerHTML = request.responseText;
    }
  }
};
request.send();