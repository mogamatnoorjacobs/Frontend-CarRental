//$(document).ready(function(){

//static link to database
var URLlink = "http://localhost:8080";

//variable to hold the orderId
var orderID = 0;

//variable to hold the array of href links
var edit_of_edit_button;

//variable to hold the rentID
var rentId = 0;

//session information for the transaction according to the selected customer
var sessionData = sessionStorage.sessionInfo;

var customerID = sessionData.split("_")[1];

var invoiceID = sessionData.split("_")[2];

//function to make sure the edit href above are triggered
// $("a#edit").click(function(){
//     edit_of_edit_button = $(this).data('value');
//     //ids = edit_of_edit_button;
//
//     //load id into session variable
//    // sessionStorage.setItem("carId", edit_of_edit_button);
//
// });


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

                    }
                    // else if(m.id != category_button)
                    // {
                    //     $("#table tbody").append("No available cars");
                    //     event.preventDefault();
                    //
                    // }
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

//function to create order and invoice and load to database
$(function(){



    //create an order
    var currentDate = new Date();

    var todayDate = currentDate.getDate() + '/' + currentDate.getMonth() + '/'+currentDate.getFullYear();

    $.ajax({
        type: "POST",
        dataType: "json",
        url: URLlink + "/order/"+customerID+"/addOrder?",
        data: "orderDate=" + todayDate,
        async: false,
        success: function(data)
    {
        //ID for the order number returned when post is used to send data to database
        orderID = data.id;
    }
});

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
    var carID = validateSelectedCar($("#txtCar").val());
    var category = validateSelectedCategory($("#txtCategory").val());

    //data to be sent to the database
    var rentData = "rentDate=" +rentDate+ "&returnDate=" +returnDate+ "&totalPrice="+price+"&rentalDays="+days;

        //TODO - - - finalize the ajax with order number from the team
        $.ajax({
            type: "POST",
            dataType: "json",
            url: URLlink + "/rent/" + orderID + "/"+ carID +"/rentCar?",
            data: rentData,
            async: false,
            success: function(data)

            {
                rentId = data.id;
                //get the data of the car we want hiring out
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: URLlink + "/car/readCar?",
                    data: "id=" + carID,
                    async: false,
                    success: function (data) {
                        console.log(data.make + "" + data.model + "" + data.year + "" + data.numberPlate + "" + data.status);

                        //variable to change the status of car to false
                        var status = false;

                        //variable to hold the data for updating the car
                        var updateCar = "id="+carID+"&make=" +data.make+ "&model="+data.model+"&year="+
                            data.year+"&numberPlate="+data.numberPlate +
                                "&status="+status;

                        //update the car status to unavailable (FALSE) when the transaction is done
                        $.ajax({
                            type: "POST",
                            dataType: "json",
                            url: URLlink + "/car/" + category + "/updateCar?",
                            data: updateCar,
                            async: false,
                            success: function (data) {
                                var infoHtml = "";
                                infoHtml += '<div class="alert alert-success" role="alert">';
                                infoHtml += '<h4 class="alert-heading">Your rent was successfull!</h4>';
                                infoHtml += '<hr>'
                                infoHtml += '<p class="mb-0">Do you want to rent another car <a href="rent.html" class="alert-link">Yes</a>' +
                                    '&nbsp;&nbsp;<a href="invoice.html" class="alert-link">No</a></p>';
                                infoHtml += '</div>';

                                $("#container").fadeIn().html(infoHtml);
                            }

                        });
                    }
                });
            }
        });

        //function to send data to the history table/ history table

        var rented = true;
        var outstanding = true;

        //data to be sent to the database
        var invoiceData = "rented=" + rented + "&outstanding="+outstanding;

        $.ajax({
            type: "POST",
            dataType: "json",
            url: URLlink + "/history/" +invoiceID+ "/" +rentId+"/addHistory",
            data: invoiceData,
            async: false,
            success: function (data) {
                sessionStorage.setItem("sessionInfo","_" + invoiceID + "_" +rentId + "_"+customerID);
            }

        });

    event.preventDefault();

}


























