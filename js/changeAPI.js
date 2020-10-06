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
    callAPI()
  }

  function callAPI() {

  }
}

export default changeAPI();
