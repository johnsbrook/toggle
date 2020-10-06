function onClick() {
  start();

  var val = true;

  function start() {
    document.body.addEventListener("click", function (event) {
      if (event.target.className == "toggle bg-info mt-4") {
        valToggle();
        changeValue(event);
      }
    });
  }

  function valToggle() {
    console.log("Before: ", val);
    val = !val;
    console.log("After: ", val);
    backgroundColor();
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
}

export default onClick();
