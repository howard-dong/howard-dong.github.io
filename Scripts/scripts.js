function showMenu() {
  var elements = document.getElementsByClassName("btn nav");
  if (elements[0].style.display == "block") {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  } else {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }
}