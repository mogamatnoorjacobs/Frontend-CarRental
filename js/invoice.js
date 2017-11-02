/**
 * Created by thabomoopa on 31/10/2017.
 */
$(document).ready(function() {

    //constant variable for url link
    var URLlink = "http://localhost:8080";

    //session information for the transaction according to the selected customer
    var sessionData = sessionStorage.sessionInvoiceCustomer;
    var sessionRentals = sessionStorage.arrayRentals;
    var sessionCars = sessionStorage.arrayCars;
    console.log(sessionData);
    var invoiceID = sessionData.split("_")[1];

    var customerId = sessionData.split("_")[2];

    var str = sessionRentals;
    var str_array = str.split('_');
    console.log(str);

    var strCars = sessionCars;
    var strCars_array = strCars.split('_');
    console.log(strCars);


    var invoiceData = [];

    //hold values for the car make
    var make = [];
    var model = [];
    var numberPlate = [];
    var subtotal = [];
    var print = [make, model, numberPlate, subtotal];
    console.log(print);


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

    // $.ajax({
    //     type: "GET",
    //     dataType: "json",
    //     url: URLlink + "/history/findAll?",
    //     //data: "customerID=" + customerId,
    //     async: false,
    //     success: function (data) {
    //         console.log(data);


            //if(historyData.invoices.id == invoiceID)
            // {
            //loop through customer
            //$.each(historyData.invoices, function(customer, customerData){
            // if(customerData.id == customerId)
            // {


            //   }
            // });

            //}
            //loop through history
            //$.each(data, function (history, historyData) {
                //find the total price
                for (var i = 1; i < str_array.length; i++) {

                    str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");

                    //if (historyData.rent.id == str_array[i]) {
                        $.ajax({
                            type: "GET",
                            dataType: "json",
                            url: URLlink + "/rent/findRentedItem?",
                            data: "id=" + str_array[i],
                            async: false,
                            success: function (data) {
                                subtotal.push(data.totalPrice);
                            }
                        });
                    //}
                }//end for loop

                //find all cars
                for (var i = 1; i < strCars_array.length; i++) {

                    strCars_array[i] = strCars_array[i].replace(/^\s*/, "").replace(/\s*$/, "");

                    //if (historyData.rent.car.id == strCars_array[i]) {
                        $.ajax({
                            type: "GET",
                            dataType: "json",
                            url: URLlink + "/car/readCar?",
                            data: "id=" + str_array[i],
                            async: false,
                            success: function (data) {

                                make.push(data.make);
                                model.push(data.model);
                                numberPlate.push(data.numberPlate);

                            }
                        });
                    //}
                }//end for loop

   //          });
   //
   //
   //      }
   // //});

    for (var i = 0; i < print.length; i++) {

        var htmlData = '';
        htmlData += '<tr>';
        htmlData += '<td>' + make[i] + '</td>';
        htmlData += '<td>' + model[i] + '</td>';
        htmlData += '<td>' + numberPlate[i] + '</td>';
        htmlData += '<td>' + subtotal[i] + '</td>';
        htmlData += '</tr>';
        $("#table tbody").append(htmlData);


    }//end for loop

});


