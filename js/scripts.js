$(document).ready(function()
{
  $("form#form1").submit(function(event)
  {
    event.preventDefault();


    var number = parseInt($("#primeBox").val());
    //console.log()

    var arrayResult = prime(number);

/*function list numbers*/
    function prime(paramNumber)
    {
      var newArray= [];
      var index=0;
      if(paramNumber>=2)
      {
        for (var i = 2; i <=paramNumber; i++)
        {
          newArray[index]=i;
          index++;

        }
      }
      else
      {
        return -1
      }
      return newArray;
    }


  var idx =0;
  while (idx < arrayResult.length) {
    var element = arrayResult[idx];
    var newArr = arrayResult.filter(function(item) {
      if (item === element) {return true}
      return item % element !== 0;
    });
    arrayResult = newArr;
    idx +=1;
  }

  $("#resultBox").text(arrayResult);



/*
      var result2 = result.filter(function(numberP)
     {
       if(numberP%2===0)
       {
         return false;
       }
       else
       {
         return true;
       }
     });



     console.log(result2);*/




    /*  */





  });


});
