let main_btn = document.getElementById("primary");

function myfunc() {
var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
	request.onload = function() {    
    var data = JSON.parse(this.response);
    var mymeal = data.meals[0];
    console.log(data.meals[0].strMeal); 	
    
    $("#myimg").css("display","block");
        $("#mytable").css("display","block");
    
    

        document.getElementById('myimg').src = data.meals[0].strMealThumb;
    document.getElementById('name').innerHTML = data.meals[0].strMeal;
    document.getElementById('origin').innerHTML = data.meals[0].strArea;
    
    document.getElementById('instructions').innerHTML = data.meals[0].strInstructions;
  
    
   $("#ingredients").html(mymeal.strIngredient1 + ","+mymeal.strIngredient2+","+mymeal.strIngredient3);
  $("#category").html(data.meals[0].strCategory); $("#thumb").html(data.meals[0].strMealThumb);
    
  $( "#primary" ).animate({
    marginTop: "0.2in",
  }, 1500 );

};

request.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true);
request.send();
}