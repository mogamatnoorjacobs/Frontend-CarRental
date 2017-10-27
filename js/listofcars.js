$(document).ready(function(){
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
			$.each(data, function(k, v){
			$("#categoryButtons").append('<button class="btn btn-outline-success" value='+v.id+'>'+v.name+'</button>');

			}); 

					//ajax function to retrieve the categories from the database
					$.ajax({
					type: "GET",
					dataType: "json",
					url: URLlink + "/car/readAllCars?",
						//data: name,
					async: false,
					success: function(data)
					{ 
						
				    	$.each(data, function(k, v){
    					$("#carId").append(v.id + "<br />");
    					$("#Make").append(v.make + "<br />");
    					$("#Model").append(v.model + "<br />");
    					$("#Year").append(v.year + "<br />");
    					$("#Quantity").append(v.quantity + "<br />");  
				   		});
					}
			}); 
							    
		}
	}); 
	//When selecting a category the textbox is populated with the category number
	$("button").click(function(){
		var category_button = $(this).val(); 
		$.ajax({
			type: "GET",
			dataType: "json",
			url: URLlink + "/car/" + category_button +"/readAll?",
						//data: name,
			async: false,
			success: function(data)
			{ 
						
				$.each(data, function(k, v){
    			$("#carId").append(v.id + "<br />");
    			$("#Make").append(v.make + "<br />");
    			$("#Model").append(v.model + "<br />");
    			$("#Year").append(v.year + "<br />");
    			$("#Quantity").append(v.quantity + "<br />");  
				});
			}
		});		
	}); 	
});

