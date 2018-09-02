var button = document.getElementById("joke-button");
var div = document.getElementById("joke-container");
button.addEventListener("click", loadDoc);
function loadDoc() {
  var xhttp = new XMLHttpRequest(); // создание обьекта.
  xhttp.open("GET", "https://api.icndb.com/jokes/random", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      responseBody = xhttp.responseText;
      data = JSON.parse(responseBody);
      document.getElementById("joke-container").innerHTML = data.value.joke;
    }
  };
}

window.onload = function() {
  $("#joke-button").on("click", function() {
    function getRandomArbitrary(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
    var result = getRandomArbitrary(10, 40) + "px";
    console.log(result);

    var fontFamily = getRandomArbitrary(10, 40);
    if (fontFamily >= 10 && fontFamily < 20) {
      fontFamily = "Arial";
    } else if (fontFamily >= 20 && fontFamily < 30) {
      fontFamily = "Calibri";
    } else {
      fontFamily = "Сambria";
    }
    console.log(fontFamily);

    var fontWeight = getRandomArbitrary(10, 40);
    if (fontWeight >= 10 && fontWeight < 20) {
      fontWeight = "lighter";
    } else if (fontWeight >= 20 && fontWeight < 30) {
      fontWeight = "bold";
    } else {
      fontWeight = "normal";
    }
    $("#joke-container").css("font-size", result);
    $("#joke-container").css("font-family", fontFamily);
    $("#joke-container").css("font-weight", fontWeight);
    $("#joke-container").css("border", "2px solid lightblue");
    console.log(fontWeight);
  });
};