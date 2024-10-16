function myFunction() {
    var element = document.body;
    var boxes = document.getElementsByClassName("box"); // HTMLCollection
    var lines = document.getElementsByClassName("line");
    element.classList.toggle("light-mode");

    // Loop through all elements with the class "box"
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle("light-mode");
    }

    for (var i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("light-mode");
    }
  }