function openWindow() {
    document.getElementById("myWindow").style.display = "block";
  }
  
  function closeWindow() {
    document.getElementById("myWindow").style.display = "none";
  }
  
  function changeBackground(color) {
    document.body.classList.remove("green-background", "red-background");
    document.body.classList.add(color + "-background");
  } 