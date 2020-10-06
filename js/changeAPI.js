function changeAPI() {
  first();
  var val = true;
  var API;

  function first() {
    document.body.addEventListener("click", function (event) {
      val = !val;
      APIToggler();
    });
  }

  function APIToggler() {
    if (val) {
      API = "https://coffeeproducts.herokuapp.com/api/products/coffee";
    } else {
      API = "https://coffeeproducts.herokuapp.com/api/products/tea";
    }
    console.log(API);
    callAPI(API);
  }

  function callAPI(API) {

    const createNode = (elem) => {
      return document.createElement(elem);
    };
    const appendNode = (parent, elem) => {
      // console.log(elem)
      parent.appendChild(elem);
    };

    var idNo = 0;

    fetch(API)
      .then((res) => res.json())
      .then((d) => {
          d.map((d) => {
              console.log("This is d mapped", d.product)
          })
      });
  }
}

export default changeAPI();
