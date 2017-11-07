
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
    else if(/[^a-zA-Z-, ]/.test(make))
    {
        $("#errorMake").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtMake").click(function(){
            $("#errorMake").fadeOut('slow');
        });
        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;


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
    else if(/[^a-zA-Z0-9-., ]/.test(model))
    {
        $("#errorModel").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtModel").click(function(){
            $("#errorModel").fadeOut('slow');
        });
        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;


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
        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;


    }
    else
        return year;
}
function validateNumberPlate(numberPlate)
{
    var plate = '';
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/car/readAllCars?",
        //data: data,
        async: false,
        success: function(data)
        {
            $.each(data, function(key, value){
                plate = value.numberPlate;
            })

        }
    });

    if(plate == numberPlate)
    {
        $("#errorNumberPlate").text("Number plate already exists.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtNumberPlate").click(function(){
            $("#errorNumberPlate").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if(numberPlate === "")
    {
        $("#errorNumberPlate").text("Please enter quantity.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtNumberPlate").click(function(){
            $("#errorNumberPlate").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if(/[^A-Z0-9-, ]/.test(numberPlate))
    {
        $("#errorNumberPlate").text("Only Capital letters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtNumberPlate").click(function(){
            $("#errorNumberPlate").fadeOut('slow');
        });
        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;


    }
    else
        return numberPlate;
}
//function to validate the submit button from the form
function addCar()
{
    var categoryNumber = validateCategory($("#txtCategory").val());
    var status = true;
    var make = validateMake($("#txtMake").val());
    var model = validateModel($("#txtModel").val());
    var year= validateYear($("#txtYear").val());
    var numberPlate = validateNumberPlate($("#txtNumberPlate").val());

    var data = "make=" + make + "&model="+model+"&year="+year+"&numberPlate="+numberPlate+"&status=" + status;
    event.preventDefault();

    if(categoryNumber == false || make == false || model == false || year == false || numberPlate == false)
    {
    	event.preventDefault();
    	//return;
    }
    else
    {

    	$.ajax({
    		type: "POST",
    		dataType: "json",
    		url: URLlink + "/car/" + categoryNumber + "/addCar?",
    		data: data,
    		async: false,
    		success: function(data)
    		{

                var infoHtml = "";
                infoHtml += '<div class="alert alert-success" role="alert">';
                infoHtml += '<h4 class="alert-heading">Successfully Added a ' + make + ' ' + model + ' ' + year + ' ' + numberPlate + '</h4>';
                infoHtml += '<hr>';
                infoHtml += '<p class="mb-0">Please click here to <a href="listAllCars.html" class="alert-link">View all cars</a></p>';
                infoHtml += '<p class="mb-0">Please click here to <a href="car.html" class="alert-link">Add a new car</a></p>';
                infoHtml += '</div>';

                $("#container").fadeIn().html(infoHtml);
    		}
    	});
    }


}


