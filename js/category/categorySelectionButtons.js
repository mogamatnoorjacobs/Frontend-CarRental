//$(document).ready(function(){
//variable to hold the static http link to the server

var URLlink = "http://localhost:8080";  
var info; 
//ajax function to retrieve the categories from the database
		$.ajax({
			type: "GET",
			dataType: "json",
			url: URLlink + "/category/readAll?",
			//data: name,
			async: false,
			success: function(data)
			{ 
				 var htmlStr = '';
				    $.each(data, function(k, v){
				        htmlStr += v.id + ' ' + v.name + '' + v.price + '<br />'; 
    					document.write('<button class="btn btn-outline-success" value='+v.id+'>'+v.name+'</button>&nbsp; &nbsp;');

				   }); 
				    document.write('<br />');
			}
		}); 

//When selecting a category the textbox is populated with the category number
$("button").click(function(){
	var fired_button = $(this).val(); 
	$("#txtCategory").html(fired_button);
	document.getElementById("txtCategory").value = fired_button;

	//if there is an error when you click on any of the buttons the error message will disappear
    $("#errorCategory").fadeOut('slow'); 
}); 


/***
* Section to validate the input fields on the form 
*/
//});
