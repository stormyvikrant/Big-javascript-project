// let token = localStorage.getItem("token");
const getDaata = async function(){
  let token = localStorage.getItem("token");
  var data = await fetch("https://nykaaman-clone.herokuapp.com/carts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  
  var bagproducts=[];
  bagproducts=await data.json()
  console.log(bagproducts)
      console.log(bagproducts.length)
  
      

      
      
      if (bagproducts.length == 0) {
        console.log("err");
          // document.getElementById("heading").style.display = "none" 
          document.getElementById("hide").style.display = "none"
          document.getElementById("V-total-details").style.display = "none"
      
      
          let image = document.createElement("img");
          image.setAttribute("id", "image-icon")
          let para = document.createElement("h4")
          para.innerText = "Your Shopping Bag is Empty"
          para.setAttribute("class", "para")
      
          let shopBtn = document.createElement("button");
          shopBtn.innerText = "Start Shopping"
          shopBtn.setAttribute("class", "shopBtn")
          bigBox.style.height = "500px"
          document.getElementById("cart-items").style.height = "100%"
      
      
          image.src = "https://cdn0.iconfinder.com/data/icons/flat-design-business-set-5/24/shopping-bag-grey-512.png"
          bigBox.append(image, para, shopBtn)
      }
      else {
        console.log("here");
          showProducts(bagproducts)
      }

      



function showProducts(item) {
  // console.log(item);
    bigBox.innerHTML=""; 

    item.forEach(function (el,index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = el.img_url;
        var p = document.createElement("p");
        p.innerText = el.title;

        var hr = document.createElement("hr");

        var div2 = document.createElement("div");
        var lable = document.createElement("label")
        lable.textContent = "Quantity :"

        var i = document.createElement("i");
        i.setAttribute("class", "fas fa-trash-alt")
        i.setAttribute("id", "deleteItem");

        i.addEventListener("click", function () {
            makeDelete(el)
            // deleteItem(event)
        })


        var select = document.createElement("select");
        select.setAttribute("id", "selected");

        var opt1 = document.createElement("option")
        opt1.textContent = "1"

        var opt2 = document.createElement("option")
        opt2.textContent = "2"

        var opt3 = document.createElement("option")
        opt3.textContent = "3"
        var opt4 = document.createElement("option")
        opt4.textContent = "4"
        var opt5 = document.createElement("option")
        opt5.textContent = "5"

        select.append(opt1, opt2, opt3, opt4, opt5)
        div2.append(select);

        var p2 = document.createElement("h3");
        p2.setAttribute("id", "price")
        p2.innerText = el.price

        pr += +el.price

        select.addEventListener("change", function () {
            var p = +el.price;

            var qty_p = p * select.value
            p2.textContent = Math.floor(qty_p)

            pr += qty_p;
            document.getElementById("total").innerText = "₹" + Math.floor(pr) + " " + "/-"
            
             

            let discount = Math.floor(0.1 * Math.floor(pr));
            document.getElementById("bigDis").innerText = discount;

            let discounted_price = Math.floor(pr) - Math.floor(0.1 * Math.floor(pr));
            document.getElementById("subtotal").innerText = discounted_price;

            document.getElementById("shipping").innerText = "None";
            document.getElementById("grand").innerText = discounted_price;

            let total_price = document.getElementById("grand_total");
            total_price.innerText = discounted_price
            // console.log(pr)
        })
        div.append(img, p, i, hr, lable, div2, p2)
        bigBox.append(div)
    })
}


document.getElementById("total").innerText = "₹" + Math.floor(pr) + " " + "/-"
let discount = Math.floor(0.1 * pr);
document.getElementById("bigDis").innerText = discount;
// console.log(discount) 

let discounted_price = Math.floor(pr) - discount
document.getElementById("subtotal").innerText = discounted_price;

document.getElementById("shipping").innerText = "FREE";
document.getElementById("grand").innerText = discounted_price;


let total_price = document.getElementById("grand_total");
total_price.innerText = discounted_price

async function makeDelete(el) {
   var proId = el._id;
   let token = localStorage.getItem("token");
   console.log(proId);
   await fetch(`https://nykaaman-clone.herokuapp.com/carts/${proId}`, {
     method: "POST",
     headers: {
       Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     },
   });
   

    showProducts(bagproducts)
     location.reload();

}
  

};
var pr = 0;
var bigBox = document.getElementById("V-cart-products");
getDaata();
// 
  
  
//   var bagproduct=[];
// // if(cart.length!==0){
// //     for(let i=0;i<cart.length;i++){
// //         for(let j=0;j<data.length;j++){
// //             if(cart[i]===data[j]["value"]){
// //                 bagproduct.push(data[j]);
// //             }
// //         }
// //     }
// // }
// console.log(bagproduct);
// bagproducts=bagproduct;








// || localStorage.getItem("count")
 var count7 = 0 

 



localStorage.setItem("count", count7);

function myFunction() {
    document.getElementById("test").style.right = "-80%"
    document.getElementById("test").style.left = "100%"
    document.getElementById("test").style.transition = "all 1s ease"
    enableBodyScroll()
}

// document.getElementById("openCart").addEventListener("click",()=>{
//     // window.location.href="cart.html"
//     hide();
// })


function disableBodyScroll(){
    const element = document.querySelector("body");
    element.classList.add("stop-scroll");
   }

   function enableBodyScroll(){
    const element = document.querySelector("body");
    element.classList.remove("stop-scroll");
   }
function deleteItem(event) {
    event.target.parentNode.remove();
}


document.getElementById("gotopayment666").addEventListener("click",function() {
    let ff=Math.floor(Math.floor(pr)-Math.floor(0.1*pr))
    // localStorage.setItem("finalproduct",JSON.stringify(bagproducts));
    
    window.location.href="address.html"
    
})
console.log(document.getElementById("gotopayment666"))


//dont delete this because i used to show userdetails 
let user = JSON.parse(localStorage.getItem("userdata"));
console.log(user);
let account = document.querySelector(".css-17ukzrr");
account.innerHTML = user.name;

function logout() {
  localStorage.setItem("userdata", "");
  localStorage.setItem("token", "");
  console.log("hi");
  window.location.href = "home.html";
}

function token() {
  let user = localStorage.getItem("userdata");
  console.log(user);
  console.log("hello");
  if (user == "") {
    // console.log("hello1");
    window.location.href = "signup.html";
  }
} 

