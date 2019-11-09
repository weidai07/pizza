function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  var price = 0
  if (this.toppings === "meat" && this.size === "small") {
    return price = 7;
  } else if (this.toppings === "meat" && this.size === "large"){
    return price = 8;
  } else if (this.toppings === "noMeat" && this.size === "small"){
    return price = 3;
  } else if (this.toppings === "noMeat" && this.size === "large"){
    return price = 4;
  } else {
    return false;
  }
}


// $(document).ready(function() {
//   $("form#formOne").submit(function(event) {
//     event.preventDefault();
//
//       var inputToppings = $("input:radio[name=toppings1]:checked").val();
//       var inputSize = $("input:radio[name=size1]:checked").val();
//       var userInput = new Pizza (inputToppings, inputSize);
//       var result = userInput.cost();
//
//       $(".total1").text(result).show();
//   });
// });
