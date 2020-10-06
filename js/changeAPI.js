function changeAPI() {
  first();
  var val = true;
  var API;
  const promo = document.querySelector("#display");

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
      parent.appendChild(elem);
    };
    var idNo = 0;
    promo.innerHTML = ''
    products();

    function products() {
   
    fetch(API)
      .then((res) => res.json())
      .then((d) => {
          d.map((d) => {
            let li = createNode("li");
            let btn = createNode("button");
            let btn2 = createNode("button");
            let br = createNode("br");
            let spanH = createNode("div");
            let span = createNode("span");
            let p = createNode("div");
            let image = createNode("img");
  
  
            spanH.innerText = d.product + " " + " $" + d.price;
            spanH.id = d._id;
            spanH.setAttribute("class", "add");
            p.innerText = d.description;
            (btn.innerText = "Add"), btn.setAttribute("class", "add");
            btn.setAttribute("id", d.category + (idNo += 1));
            btn2.innerText = "More";
            image.setAttribute("src", d.image);
            image.setAttribute(
              "style",
              "width: 150px; height: auto; border-radius: 15px;"
            );
  
            appendNode(li, image);
            appendNode(li, spanH);
            appendNode(li, span);
            appendNode(li, p);
            appendNode(li, btn);
            appendNode(li, btn2);
            appendNode(promo, li);
          })
      
        
      });
  }
}
}

export default changeAPI();
