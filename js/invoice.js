/**
 * Created by thabomoopa on 31/10/2017.
 */
$(document).ready(function() {

    //constant variable for url link
    var URLlink = "http://localhost:8080";

    //session information for the transaction according to the selected customer
    var sessionData = sessionStorage.sessionInvoiceCustomer;
    var sessionRentals = sessionStorage.arrayRentals;

    var invoiceID = sessionData.split("_")[1];

    var customerId = sessionData.split("_")[2];

    var strRentals = sessionRentals;
    var strRentals_array = strRentals.split('_');
   // strRentals_array.shift();
    console.log(strRentals_array);

    //hold values for the car make
    var make = [];
    var model = [];
    var numberPlate = [];
    var subtotal = [];
    var print = [];

    var total = 0;




    //create today's date and display on the html
    var currentDate = new Date();

    var todayDate = currentDate.getDate() + '/' + currentDate.getMonth() + '/' + currentDate.getFullYear();

    //send the data to the html script
    $("#invoiceNo").text(invoiceID);
    $("#invoiceDate").text(todayDate);


    //customer details display
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/customer/findCustomerByID?",
        data: "customerID=" + customerId,
        async: false,
        success: function (customerData) {

            $("#name").text(customerData.name);
            $("#surname").text(customerData.surname);
            $("#email").text(customerData.email);
            $("#city").text(customerData.city);
            $("#province").text(customerData.province);
            $("#complex").text(customerData.complex);
            $("#street").text(customerData.street);
            $("#unitno").text(customerData.houseNumber);
            $("#postalCode").text(customerData.postalCode);

        }
    });

    //

    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/rent/findAllRentedCars?",
        //data: "customerID=" + customerId,
        async: false,
        success: function (rent) {
            $.each(rent, function(key, value) {

                console.log(value.id = strRentals_array[key]);
                    if(value.id = strRentals_array[key])
                    {

                    print.push(value.id);
                    make.push(value.car.make);
                    model.push(value.car.model);
                    numberPlate.push(value.car.numberPlate);
                    subtotal.push(value.totalPrice);
                }
            });

        }
    });

    ///console.log(print);
   // console.log(make.length);
    for (var i = 0; i < make.length; i++) {
        //variable to hold the structure to display to the screen
        var htmlData = '';
        htmlData += '<tr>';
        htmlData += '<td>' + make[i] + '</td>';
        htmlData += '<td>' + model[i] + '</td>';
        htmlData += '<td>' + numberPlate[i] + '</td>';
        htmlData += '<td>' + subtotal[i] + '</td>';
        htmlData += '</tr>';
        $(".table #invoiceDetails").append(htmlData);

        total = total + subtotal[i];


    }//end for loop


    var vat = total * 0.14;
    finalTotal = vat + total;
    var tableData = '';
    tableData += '<tr>';
    tableData += '<th> Subtotal: R' + total.toFixed(2) + '</th>';
    tableData += '</tr>';
    tableData += '<tr>';
    tableData += '<th> Vat (14%): R' + vat.toFixed(2) + '</th>';
    tableData += '</tr>';
    tableData += '<tr>';
    tableData += '<th> Total: R' + finalTotal.toFixed(2) + '</th>';
    tableData += '</tr>';
    $("#results tbody").append(tableData);

    //console.log(display);

});


