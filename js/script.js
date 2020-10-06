onclick();

var val = true;

function onclick() {
    document.body.addEventListener("click", function (event) {
        if (event.target.className == "toggle") {
            valToggle();
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
    if(val) {
        document.body.setAttribute("class", " ");
    } else {
        document.body.setAttribute("class", "bg-danger")
    }
}