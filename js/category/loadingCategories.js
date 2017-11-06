/** This script is activated when you run the index file of the application 
*	It will run on the background so that your database is populated with the categories
*/ 

$(document).ready(function(){


//Static data for the different categories 
var categories = "Sedan,450,SUV,500,Limos,1000,Trailers,2000,Buses,600";

//variable to hold the http request link 
var URLlink = "http://localhost:8080";

//variable to find if the database has a category named Sedan
var id = 1;

/* The following variables will hold the data for the different categories
* var sedan will load the database with the name and price
* var SUV will load the database with the name and price
* var Limos will load the database with the name and price
* var Trailers will load the database with the name and price
* var Buses will load the database with the name and price 
*/

var sedan = "name=Sedan&price=450";
var SUV = "name=SUV&price=500";
var Limos = "name=Limos&price=1000";
var Trailers = "name=Trailers&price=2000";
var Buses = "name=Buses&price=600";
var available ='';

/*Statement will check the database to see if the Sedan category is loaded already, 
if it's load then it will prevent the data from being loaded again.
*/ 
		$.ajax({
			type: "GET",
			dataType: "json",
			url: URLlink + "/category/read?",
			data: "id=" + id,
			async: false,
			success: function(data)
			{ 
				available = data.id;
			}
		});

		if(available == 1)
		{
		}
		else
		{
			//statement will load the sedan details
			$.ajax({
			type: "POST",
			dataType: "json",
			url: URLlink + "/category/addCategory?",
			data: sedan,
			async: false,
			success: function(data)
			{ 
				//statement will load the SUV details
				$.ajax({
				type: "POST",
				dataType: "json",
				url: URLlink + "/category/addCategory?",
				data: SUV,
				async: false,
				success: function(data)
				{ 
					//statement will load the Limos details
					$.ajax({
					type: "POST",
					dataType: "json",
					url: URLlink + "/category/addCategory?",
					data: Limos,
					async: false,
					success: function(data)
					{ 
						//statement will load the Buses details
						$.ajax({
						type: "POST",
						dataType: "json",
						url: URLlink + "/category/addCategory?",
						data: Buses,
						async: false,
						success: function(data)
						{ 
							//statement will load the Trailers details
							$.ajax({
							type: "POST",
							dataType: "json",
							url: URLlink + "/category/addCategory?",
							data: Trailers,
							async: false,
							success: function(data)
							{ 
								console.log(data);
							}
						}); 
						}
					}); 
					}
				}); 
				}
			}); 
			}
		}); 

}

});