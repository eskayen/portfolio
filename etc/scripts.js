var root = document.querySelector(":root");

// change css colors and change localstorage variables
function colorChange(primary, secondary, text, accent) {
  localStorage.setItem("--primary-color", primary);
  localStorage.setItem("--secondary-color", secondary);
  localStorage.setItem("--text", text);
  localStorage.setItem("--accent", accent);
  root.style.setProperty("--primary-color", primary);
  root.style.setProperty("--secondary-color", secondary);
  root.style.setProperty("--text", text);
  root.style.setProperty("--accent", accent);
}

function obtainColors() {
  //obtain local colors and log
  if (localStorage.getItem("--primary-color")) {
    colorChange(
      localStorage.getItem("--primary-color"),
      localStorage.getItem("--secondary-color"),
      localStorage.getItem("--text"),
      localStorage.getItem("--accent")
    );

    console.log("Colors found. Loading.");
  }
  //set to default colors
  else {
    console.log("Colors not found.");
    colorChange("white", "darkgray", "black", "darkred");
  }
}

// dropdown function opens list
function dropdownFunction() {
  document.getElementById("colorlist").classList.toggle("show");
}

//actually obtain the colors
obtainColors();

// close list if user clicks outside
window.onclick = function (event) {
  if (!event.target.matches(".colorButton")) {
    var amount = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < amount.length; i++) {
      var open = amount[i];
      if (open.classList.contains("show")) {
        open.classList.remove("show");
      }
    }
  }
};
