var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
];

//var seasons = {
//  "loveWinter": "",
//  "Price": ""
//  
//};
//
//alert("welcome! we hope you love winter as much as we do!");
//
//var loveWinter = prompt("but seriously, do you love winter?");
// if (loveWinter == "yes") {
//   alert("yay! us too!")
//   seasons.loveWinter = true; 
//   
// } else if (seasons.loveWinter == "no") {
//   alert("well fine!")
//   seasons.loveWinter + false;
// }
//   else {
//     alert("come on! you can tell us!");
//}
//
//console.log(seasons);
//
//
//var price = prompt("how much are you willing to spend?");
//
//var parsedPrice = parseInt(Price) ;
//
//if (parsedPrice >= 0 && parsedPrice < 10000) { 
//    seasons.price = parsedPrice;
//    }
//    
//console.log(seasons);

//function capture () {
//  console.log("sure it worked");
//  console.log(document.filter.price.value);
//  console.log(document.filter.name.vallue);
//  event.preventDefault();
//  
//}


for(var i = 0; i<products.length; i++){
 
  console.log(products[i].name);
  console.log(products[i].description);
  console.log(products[i].price);
}

function comparePrice(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function filterProducts(){
  var sort_type = document.sortBy.filter.value;
  if (sort_type === "price") {
    console.log("sort by price");
    products.sort(comparePrice);
  } else if (sort_type === "name") {
    console.log("sort by name");
    products.sort(compareName);
  }
  console.log(products);
 event.preventDefault();
}

var cart = [];


//function removeCart(name) {
//  console.log(cart.length);
//  console.log(name);
//  console.log(cart);
//}


function addCart(name) {
  var name_is_already_in_cart = false;
  for (var i = 0; i < cart.length; i++) {
    if (name === cart[i]) {
      name_is_already_in_cart = true;
    }
  }
  if (!name_is_already_in_cart) {
      cart.push(name);
  }
  console.log(cart.length);
  console.log(name);
  console.log(cart);
}



function removeCart(name) {

  for (var i = 0; i < cart.length; i++) {
    if (name === cart[i]) {
      cart.splice(i, 1);
    
    }
  }
  
  console.log(cart.length);
  console.log(name);
  console.log(cart);
}