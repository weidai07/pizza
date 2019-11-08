function Pizza (toppings, size){
  this.toppings = toppings,
  this.size = size,
  this.totalAmt=0
}

Account.prototype.cost = function(toppings, size) {
  return this.totalAmt += this.toppings + this.size;
}

// Account.prototype.total = function(toppings, size){
//   this.totalAmt += toppings;
//   this.totalAmt += size;
//   return this.totalAmt;
// }




$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();

      var userInput = new Pizza (toppings, size)
  });
});






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
