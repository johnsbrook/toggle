import changeAPI from "./changeAPI.js";
function onClick() {
  start();
  changeAPI;

  var val = true;
  var API;

  function start() {
    document.getElementById("toggle").addEventListener("click", function (event) {
      console.log(event.target.className)
      if (event.target.className == "toggle bg-info mt-4") {
        valToggle();
        changeValue(event);
        changeInnerHTML(event);
      }
    });
  }

  function valToggle() {
    console.log("Before: ", val);
    val = !val;
    console.log("After: ", val);
  }

  function backgroundColor() {
    if (val) {
      document.body.setAttribute("class", " ");
    } else {
      document.body.setAttribute("class", "bg-danger");
    }
  }

  function changeValue(event) {
    console.log("Event before: ", event.target.value);
    if (val) {
      event.target.value = true;
    }
    if (!val) {
      event.target.value = false;
    }
    console.log("Event after: ", event.target.value);
  }

  function changeInnerHTML(event) {
    if(val) {
      event.target.innerHTML = "Click for Tea Menu"
    } else {
      event.target.innerHTML = "Click for Coffee Menu"
    }
  }
}

export default onClick();
