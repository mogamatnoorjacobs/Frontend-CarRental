//$(document).ready(function(){
		var URLlink = "http://localhost:8080";
		var info;

		//variable to hold the array of href links
		var edit_of_edit_button;

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
					$("#categoryButtons").append('<button id="categoryBtn" class="btn btn-outline-success" value='+v.id+'>'+v.name+'</button>');

					});
							//function to read all cars in the database and print to table
							$.ajax({
							type: "GET",
							dataType: "json",
							url: URLlink + "/car/readAllCars?",
								//data: name,
							async: false,
							success: function(data)
							{

						    	$.each(data, function(k, v){
										var htmlData = '';
										htmlData += '<tr>';
										htmlData += '<td>' + v.id + '</td>';
										htmlData += '<td>' + v.make + '</td>';
										htmlData += '<td>' + v.model + '</td>';
										htmlData += '<td>' + v.year + '</td>';
										htmlData += '<td>' + v.quantity + '</td>';
										htmlData += '<td><a href="editCar.html" class="btn btn-outline-warning" data-value="'+v.id+'" id="edit">Edit</a><a href="listOfCars.php" class="btn btn-outline-danger" data-value="'+v.id+'" id="delete" >Delete</a><br /></td>';
										htmlData += '</tr>';
										$("#table tbody").append(htmlData);
							   		});
							}
					});

				}
			});

			//function to make sure the edit href above are triggered
			$("a#edit").click(function(){
			    edit_of_edit_button = $(this).data('value');
					//ids = edit_of_edit_button;

							//load id into session variable
							sessionStorage.setItem("carId", edit_of_edit_button);

							//open the edit car page
							//event.preventDefault();

					});

					//function to make sure the delete href above are triggered
					$("a#delete").click(function(){
					   var delete_href = $(this).data('value');

							//function to delete data from database
							$.ajax({
								type: "GET",
								dataType: "json",
								url: URLlink + "/car/deleteCar?",
								data: "id=" + delete_href,
								async: false,
								success: function(data)
								{
									location.href="listOfCars.html";
								}
							});

							});

					//function to delete the car from the database based on the id


			//view cars based on the category id
			$("button").click(function(){

				var category_button = $(this).val();
				$.ajax({
					type: "GET",
					dataType: "json",
					url: URLlink + "/car/readAllCars?",
								//data: name,
					async: false,
					success: function(data)
					{
						//$("#container").hide();
						$("#table tbody").empty();
						$.each(data, function(k, v){

							$.each(v, function(l, m){

									if(category_button == m.id){
										var htmlData = '';
										htmlData += '<tr>';
										htmlData += '<td>' + v.id + '</td>';
										htmlData += '<td>' + v.make + '</td>';
										htmlData += '<td>' + v.model + '</td>';
										htmlData += '<td>' + v.year + '</td>';
										htmlData += '<td>' + v.quantity + '</td>';
										htmlData += '<td><a href="" class="btn btn-outline-warning" data-value="'+v.id+'" id="edit">Edit</a><a href="" class="btn btn-outline-danger" data-value="'+v.id+'" id="delete">Delete</a><br /></td>';
										htmlData += '</tr>';
										$("#table tbody").append(htmlData);

										}
								});
							});

							//function to make sure that the href tags in the inner loop are triggered
							$("a").click(function(){
							    edit_of_edit_button = $(this).data('value'); // would be 5

									//load id into session variable
									sessionStorage.setItem("carId", edit_of_edit_button);

									//open the edit car page
									location.href="editCar.html";
									event.preventDefault();
								});
						}

					});
			});
		//});
