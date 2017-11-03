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
    var sessionHistory = sessionStorage.arrayHistory;

    var invoiceID = sessionData.split("_")[1];

    var customerId = sessionData.split("_")[2];

    var strHistory = sessionHistory;
    var strHistory_array = strHistory.split('_');
    //console.log(strHistory);

    var strRentals = sessionRentals;
    var strRentals_array = strRentals.split('_');
    console.log(strRentals);

    var strCars = sessionCars;
    var strCars_array = strCars.split('_');
    //console.log(strCars);




    //hold values for the car make
    var make = [];
    var model = [];
    var numberPlate = [];
    var subtotal = [];
    var print = [[make, model, numberPlate, subtotal]];
    console.log(print.length);

    var total = 0;
    var finalTotal = 0;
    //console.log(print);

    //variable to hold the structure to display to the screen
    var htmlData = '';

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


    //find the history record
    for (var i = 1; i < strHistory_array.length; i++) {

        strHistory_array[i] = strHistory_array[i].replace(/^\s*/, "").replace(/\s*$/, "");

            $.ajax({
                type: "GET",
                dataType: "json",
                url: URLlink + "/history/findHistoryItem?",
                data: "historyId=" + strHistory_array[i],
                async: false,
                success: function (history) {
                    //console.log(history); //find the history record

                    //get the rentals subtotal price
                    for (var i = 1; i < strRentals_array.length; i++) {

                        strRentals_array[i] = strRentals_array[i].replace(/^\s*/, "").replace(/\s*$/, "");

                        $.ajax({
                            type: "GET",
                            dataType: "json",
                            url: URLlink + "/rent/findRentedItem?",
                            data: "id=" + strRentals_array[i],
                            async: false,
                            success: function (rent){
                                console.log(rent.totalPrice);
                                subtotal.push(rent.totalPrice);
                            }

                        });
                    }

                    //find the car associated with the record
                    for (var i = 1; i < strCars_array.length; i++) {

                        strCars_array[i] = strCars_array[i].replace(/^\s*/, "").replace(/\s*$/, "");

                        $.ajax({
                            type: "GET",
                            dataType: "json",
                            url: URLlink + "/car/readCar?",
                            data: "id=" + strCars_array[i],
                            async: false,
                            success: function (car){
                                console.log(car);
                                make.push(car.make);
                                model.push(car.model);
                                numberPlate.push(car.numberPlate);
                            }
                        });
                    }
                }
            });

    }
    for (var i = 0; i < print.length; i++) {
        htmlData += '<tr>';
        htmlData += '<td>' + make[i] + '</td>';
        htmlData += '<td>' + model[i] + '</td>';
        htmlData += '<td>' + numberPlate[i] + '</td>';
        htmlData += '<td>' + subtotal[i] + '</td>';
        htmlData += '</tr>';
        $("#table tbody").append(htmlData);

        total = total + subtotal[i];


    }//end for loop
    //$("#table tbody").append(total);
    //$("#table tbody").append(total);

    var vat = total * 0.14;
    finalTotal = vat + total;
    var tableData = '';
    tableData += '<tr>';
    tableData += '<th> Subtotal: R' + total + '</th>';
    tableData += '</tr>';
    tableData += '<tr>';
    tableData += '<th> Vat (14%): R' + vat.toFixed(2) + '</th>';
    tableData += '</tr>';
    tableData += '<tr>';
    tableData += '<th> Total: R' + finalTotal + '</th>';
    tableData += '</tr>';
    $("#results tbody").append(tableData);



});


