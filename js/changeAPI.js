function changeAPI() {
  first();
  var val = true;
  var API;


  function first() {
    document.body.addEventListener("click", function (event) {
      val = !val;
      teaOrCoffee();
    });
  }

  function teaOrCoffee() {
    
    if (val) {
      API = "https://coffeeproducts.herokuapp.com/api/products/coffee";
    } else {
      API = "https://coffeeproducts.herokuapp.com/api/products/tea";
    }
    console.log(API);
    callAPI(API)
  }

  function callAPI(API) {
    fetch(API)
    .then((res) => res.json())
    .then(res => console.log(res))
  }
}

export default changeAPI();
