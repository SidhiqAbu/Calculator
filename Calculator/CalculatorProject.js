
var display =document.getElementById("innercal");
var displayout = document.getElementById("outcal");
var buttons = document.getElementsByClassName("grid-item");
var oparator1 = 0;
var oparator2 = null;
var oparend = null;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "=") {
      oparator2 = parseFloat(display.textContent);
      if (oparator2 == 0 && (oparend = "/" || oparend == "%")) {
        display.innerText = "Error";
      } else {
        // console.log(oparator1 + " " + oparend + " " + oparator2);
        var output = eval(oparator1 + oparend + oparator2);
        // console.log(output);
        display.innerText = output;
      }
    } else if (
      value == "+" ||
      value == "-" ||
      value == "/" ||
      value == "*" ||
      value == "%"
    ) {

      if(value=='-' && display.textContent==''){
        display.innerText +=value;
        displayout.innerText +=value;
      }else{
      oparator1 = parseFloat(display.textContent);
      // console.log(oparator1);
      oparend = value;
      if (value == "*") {
        displayout.innerText += "x";
      } else {
        displayout.innerText += value;
      }
      display.innerText = " ";
      }
    } else if (value == "AC") {
      oparator1 = 0;
      oparator2 = null;
      oparator1 = null;
      displayout.innerText = "";
      display.innerText = "";
    } else if (value == "chgsign") {
      if (oparend == "+") {
        oparend = "-";
      } else {
        oparend = "+";
      }
      displayout.innerText = oparator1 + oparend;
    } else {
      displayout.innerText += value;
      display.innerText += value;
    }
  });
}


