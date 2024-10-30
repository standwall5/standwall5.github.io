function myFunction() {
    var element = document.body;
    var boxes = document.getElementsByClassName("box"); // HTMLCollection
    var lines = document.getElementsByClassName("line");
    var footer = document.getElementsByClassName("footer"); // This is an array
    element.classList.toggle("light-mode"); // fix for comment

    // Loop through all elements with the class "box, line and"
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle("light-mode");
    }

    for (var i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("light-mode");
    }
        footer[0].classList.toggle("light-mode");
  }