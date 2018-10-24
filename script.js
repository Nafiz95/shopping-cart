var products = [
  {name: "Wonder Woman Figurine", price: "12", image: "https://s3.amazonaws.com/mernbook/marketplace/wonder-woman-2977918_960_720.jpg"},
  {name: "Darth Vader Figurine", price: "19", image: "https://s3.amazonaws.com/mernbook/marketplace/star-wars-2463926_960_720.png"},
  {name: "Joker Figurine", price: "51", image: "https://s3.amazonaws.com/mernbook/marketplace/joker-1225051_960_720.jpg"},
  {name: "Tardis Figurine", price: "14", image: "https://s3.amazonaws.com/mernbook/marketplace/tardis.png"},
  {name: "Old Ford Car Model", price: "46", image: "https://s3.amazonaws.com/mernbook/marketplace/Ford.jpg"},
  {name: "Storm Trooper Figurine", price: "23", image: "https://s3.amazonaws.com/mernbook/marketplace/stormtrooper-1995015_960_720.jpg"}
];
var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):{
  items: [],
  total: 0
};

localStorage.setItem('cart',JSON.stringify(cart));

$(document).ready(function(){
    $('#itemNo').text(cart.items.length);
    
    products.forEach(function(product, index){
      var colDiv = $('<div>').addClass('col-md-4');
      var cardDiv = $('<div>').addClass('card');
      var prodImg = $('<img>').addClass('card-img-top');
      prodImg.attr('src', product.image);
      cardDiv.append(prodImg);
      colDiv.append(cardDiv);
      var colDiv2=$('<div>').addClass("card-body");  
      cardDiv.append(colDiv2);
      var h5=$('<h5>').addClass('card-title').text(product.name);;
      colDiv2.append(h5);
      var cardTxt=$('<p>').addClass('card-text').text('$'+product.price);
      colDiv2.append(cardTxt);
      
      btnPrimary=$('<button>').addClass('btn btn-primary').text('Add to Cart').attr('id','addCart'+index);
      colDiv2.append(btnPrimary);
      $('#prod-row').append(colDiv);
      
      btnPrimary.click(function(event){
        var cartItem= products[event.target.id];
        cartItem.quantity=1;
        cart.items.push(cartItem);
        $('#itemNo').text(cart.items.length);
        localStorage.setItem('cart',JSON.stringify(cart));
      });
    });
  
  $("#showCartBtn").click(function(){
    $("#cart").show();
    $("#products").hide();
    $("#showCartBtn").hide();
  });
  
  $("#showProdBtn").click(function(){
    $("#cart").hide();
    $("#products").show();
    $("#showCartBtn").show();
  });
  
  console.log("Start here");
  // Basic tasks
  // 1. Show / hide cart section on button click (Cart button / close cutton)
  // 2. Dynamically load products to view
  // 3. Dynamically show total items in Cart
  // 4. Add to cart button functionality
  // 5. Dynamically load cart items
  // 6. Implement quantity update for each cart item and update total cost dynamically.
  // 7. Store and load cart from localStorage
});
