$(document).ready(function(){
  //variable to hold the static http link to the server

  var URLlink = "http://localhost:8080";
  var info;

  alert(sessionStorage.carId);

      $.ajax({
  			type: "GET",
  			dataType: "json",
  			url: URLlink + "/car/readCar?",
  			data: "id=" + sessionStorage.carId,
  			async: false,
  			success: function(data)
  			{
  				document.getElementById("txtMake").value = data.make;
          document.getElementById("txtModel").value = data.model;
          document.getElementById("txtYear").value = data.year;
          document.getElementById("txtQuantity").value = data.quantity;
  			}
  		});

});




//function to validate the category input
function validateCategory(categoryNumber)
{
	if(categoryNumber === "")
	{
		$("#errorCategory").html("Please select a category by clicking on any of the buttons above");
		return false;
	}
	else
		return categoryNumber;
}

//function to validate the make text box to accept only text
function validateMake(make)
{
	if(make === "")
	{
		$("#errorMake").text("Please enter a car make.").show();

			//fade out the error text when the user clicks on the textbox
			$("#txtMake").click(function(){
        		$("#errorMake").fadeOut('slow');
    		});

    		//prevent the form from being submitted if there is an error
			event.preventDefault();
			return false;
	}
	else if(/[^a-zA-Z]/.test(make))
		{
			$("#errorMake").text("Only alphabetic characters allowed in the field.").show();
			//++errorInput;

			//fade out the error text when the user clicks on the textbox
				$("#txtMake").click(function(){
        			$("#errorMake").fadeOut('slow');
    			});
    			return false;

    			//prevent the form from being submitted if there is an error
				event.preventDefault();
		}
		else
			return make;
}
function validateModel(model)
{
	if(model === "")
	{
		$("#errorModel").text("Please enter a car model.").show();

			//fade out the error text when the user clicks on the textbox
			$("#txtModel").click(function(){
        		$("#errorModel").fadeOut('slow');
    		});

    		//prevent the form from being submitted if there is an error
			event.preventDefault();
			return false;
	}
	else if(/[^a-zA-Z]/.test(model))
		{
			$("#errorModel").text("Only alphabetic characters allowed in the field.").show();
			//++errorInput;

			//fade out the error text when the user clicks on the textbox
				$("#txtModel").click(function(){
        			$("#errorModel").fadeOut('slow');
    			});
    			return false;

    			//prevent the form from being submitted if there is an error
				event.preventDefault();
		}
		else
			return model;
}

function validateYear(year)
{
	if(year === "")
	{
		$("#errorYear").text("Please enter a car year.").show();

			//fade out the error text when the user clicks on the textbox
			$("#txtYear").click(function(){
        		$("#errorYear").fadeOut('slow');
    		});

    		//prevent the form from being submitted if there is an error
			event.preventDefault();
			return false;
	}
	else if(/[^0-9]/.test(year))
		{
			$("#errorYear").text("Only numeric characters allowed in the field.").show();
			//++errorInput;

			//fade out the error text when the user clicks on the textbox
				$("#txtYear").click(function(){
        			$("#errorYear").fadeOut('slow');
    			});
    			return false;

    			//prevent the form from being submitted if there is an error
				event.preventDefault();
		}
		else
			return year;
}
function validateQuantity(quantity)
{
	if(quantity === "")
	{
		$("#errorQuantity").text("Please enter quantity.").show();

			//fade out the error text when the user clicks on the textbox
			$("#txtQuantity").click(function(){
        		$("#errorQuantity").fadeOut('slow');
    		});

    		//prevent the form from being submitted if there is an error
			event.preventDefault();
			return false;
	}
	else if(/[^0-9]/.test(quantity))
		{
			$("#errorQuantity").text("Only numeric characters allowed in the field.").show();
			//++errorInput;

			//fade out the error text when the user clicks on the textbox
				$("#txtQuantity").click(function(){
        			$("#errorQuantity").fadeOut('slow');
    			});
    			return false;

    			//prevent the form from being submitted if there is an error
				event.preventDefault();
		}
		else
			return quantity;
}
//function to validate the submit button from the form
function validate()
{
  var URLlink = "http://localhost:8080";
  var info;
  var sessionData = $("#hidden").val();
	var make = validateMake($("#txtMake").val());
	var model = validateModel($("#txtModel").val());
	var year= validateYear($("#txtYear").val());
	var quantity = validateQuantity($("#txtQuantity").val());

	var data = "id=" + sessionData + "&make=" + make + "&model="+model+"&year="+year+"&quantity="+quantity;
	event.preventDefault();

	if(make == false || model == false || year == false || quantity == false)
	{
		event.preventDefault();
		return;
	}
	else
	{

		$.ajax({
			type: "GET",
			dataType: "json",
			url: URLlink + "/car/updateCar?",
			data: data,
			async: false,
			success: function(data)
			{
							var infoHtml = "";
							infoHtml += '<div class="alert alert-success" role="alert">';
							infoHtml += '<h4 class="alert-heading">Successfully Updated: ' + make + ' ' + model + ' ' + year + ' ' + quantity + '</h4>';
							infoHtml += '<hr>'
							infoHtml += '<p class="mb-0">Please click here to <a href="listOfCars.php" class="alert-link">View all cars</a></p>';
							infoHtml += '<p class="mb-0">Please click here to <a href="car.php" class="alert-link">Add a new car</a></p>';
							infoHtml += '</div>';

							$("#container").fadeIn().html(infoHtml);
			}
		});
	}
}
