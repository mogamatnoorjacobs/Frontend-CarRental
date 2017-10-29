//$(document).ready(function(){
var URLlink = "http://localhost:8080";
var info;
//variable to hold the array of href links
var edit_of_edit_button;

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
$("button #selectCar").click(function(){
    var selectedCar = $(this).val();

    //alert(selectedCar);

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
                        if(v.status == true)
                        {
                            var htmlData = '';
                            htmlData += '<tr>';
                            htmlData += '<td>' + v.id + '</td>';
                            htmlData += '<td>' + v.make + '</td>';
                            htmlData += '<td>' + v.model + '</td>';
                            htmlData += '<td>' + v.year + '</td>';
                            htmlData += '<td>' + v.numberPlate + '</td>';
                            htmlData += '<td>' + v.status + '</td>';
                            htmlData += '<td><button class="btn btn-outline-warning" value="'+v.id+'" id="selectCar">Select</button><br /></td>';
                            htmlData += '</tr>';
                            $("#table tbody").append(htmlData);
                        }
                        else
                        {
                            $("#table tbody").append("No available cars");
                        }
                    }
                });
            });

            //function to make sure that the href tags in the inner loop are triggered
            $("button").click(function(){
                var buttonValue = $(this).val();
                document.getElementById("txtCar").value = buttonValue;

                //load id into session variable
                sessionStorage.setItem("carId", edit_of_edit_button);

                event.preventDefault();
            });
        }

    });
});
//Calculate the price according to dates

$("#datepicker2").datepicker({
    onSelect: function(dateText, inst) {

        //var date = $(this).val();
        var time = $('#time').val();
        alert('on select triggered');
        //$("#start").val(date + time.toString(' HH:mm').toString());

    }
});



//function to validate the rent date
function validateRentDate(rentDate)
{
    if(rentDate === '')
    {
        $("#errorRentDate").text("Please select the rent date.").show();

        //fade out the error text when the user clicks on the textbox
        $("#datepicker").click(function(){
            $("#errorRentDate").fadeOut('slow');
        });
        event.preventDefault();
        return false;
    }
    else
        return rentDate;
}
//function to validate the rent date
function validateReturnDate(returnDate)
{
    if(returnDate === '')
    {
        $("#errorReturnDate").text("Please select the rent date.").show();

        //fade out the error text when the user clicks on the textbox
        $("#datepicker2").click(function(){
            $("#errorReturnDate").fadeOut('slow');
        });
        event.preventDefault();
        return false;
    }
    else
        return returnDate;
}
//function to validate the rent date
function validateSelectedCategory(category)
{
    if(category === '')
    {
        $("#errorCategory").text("Please select a category.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtCategory").click(function(){
            $("#errorCategory").fadeOut('slow');
        });
        event.preventDefault();
        return false;
    }
    else
        return category;
}
//function to validate the rent date
function validateSelectedCar(car)
{
    if(car === '')
    {
        $("#errorCar").text("Please select a car.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtCar").click(function(){
            $("#errorCar").fadeOut('slow');
        });
        event.preventDefault();
        return false;
    }
    else
        return car;
}
//function to validate the rent date
function validateSelectedDays(days)
{
    if(days === '')
    {
        $("#errorDays").text("Please select days so you can see how any days the car is rented.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtDays").click(function(){
            $("#errorDays").fadeOut('slow');
        });
        event.preventDefault();
        return false;
    }
    else
        return days;
}
//function to validate the rent date
function validatePrice(price)
{
    if(price === 0)
    {
        $("#errorPrice").text("Please select days to see the price.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtPrice").click(function(){
            $("#errorPrice").fadeOut('slow');
        });
        event.preventDefault();
        return false;
    }
    else
        return price;
}
function validateRent()
{

    var rentDate = validateRentDate($("#datepicker").val());
    var returnDate = validateReturnDate($("#datepicker2").val());
    var price = validatePrice($("#txtPrice").val());
    var days = validateSelectedDays($("#txtDays").val());
    var car = validateSelectedCar($("#txtCar").val());
    var category = validateSelectedCategory($("#txtCategory").val());

        //TODO - - - finalize the ajax with order number from the team
        $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/rent/rentCar?",
        data: "id=" + sessionStorage.carId,
        async: false,
        success: function(data)
        {
        //    TODO - - We need order front end
        }
    });

    event.preventDefault();

}


























