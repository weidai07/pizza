function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function(toppings, size) {
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
  // return this.totalAmt += this.toppings + this.size;


// Account.prototype.total = function(toppings, size){
//   this.totalAmt += toppings;
//   this.totalAmt += size;
//   return this.totalAmt;
// }




$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

      var inputToppings = $("input:radio[name=toppings]:checked").val();
      var inputSize = $("input:radio[name=size]:checked").val();
      var userInput = new Pizza (inputToppings, inputSize);
      var result = userInput.cost;

      $(".total1").text(result).show();
  // $("form#formTwo").submit(function(event){
  //   event.preventDefault();

  });
});

// this.totalAmt=0

//     var inputMovie = $("#movieID").val();
//     var inputTime = $("#timeID").val();
//     var inputAge = $("input:radio[name=age]:checked").val();
//
//     var theater = new Theater(inputMovie,inputTime,inputAge);
//       var result = "Your price is $"+theater.priceCalc()+".00";
//
// $("#resultBox").text(result).show();

// $(document).ready(function() {
//   var person1;
//   $("form#formOne").submit(function(event){
//     event.preventDefault();
//
//     var userName = $("#name").val();
//     var dep1 = parseFloat($("#first-deposit").val());
//     person1 = new Account (userName, dep1);
//
//     $(".total1").text(person1.initialDeposit());
//
//   });
//   $("form#formTwo").submit(function(event){
//     event.preventDefault();
//
//     var moneyIn = parseFloat($("#deposit").val());
//     var moneyOut = parseFloat($("#withdrawal").val());
//
//
//     $(".total1").text(person1.total(moneyIn, moneyOut));
//
//   });
// });
