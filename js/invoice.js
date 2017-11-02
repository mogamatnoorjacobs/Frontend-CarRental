/**
 * Created by thabomoopa on 31/10/2017.
 */
$(document).ready(function(){

    //constant variable for url link
    var URLlink = "http://localhost:8080";

    //session information for the transaction according to the selected customer
    var sessionData = sessionStorage.sessionInfo;

    var invoiceID = sessionData.split("_")[1];

    var rentID = sessionData.split("_")[2];

    var customerId = sessionData.split("_")[3];
    //console.log(sessionData);

    var invoiceData = [];

    //create today's date and display on the html
    var currentDate = new Date();

    var todayDate = currentDate.getDate() + '/' + currentDate.getMonth() + '/'+currentDate.getFullYear();

    //send the data to the html script
    $("#invoiceNo").text(invoiceID);
    $("#invoiceDate").text(todayDate);

    // //find the customer details of the transaction
    // $.ajax({
    //     type: "GET",
    //     dataType: "json",
    //     url: URLlink + "/customer/findCustomerByID",
    //     data: "customerID=" + customerId,
    //     async: false,
    //     success: function (data) {
    //         $("#name").text(data.name);
    //         $("#surname").text(data.surname);
    //         $("#email").text(data.email);
    //         $("#city").text(data.city);
    //         $("#province").text(data.province);
    //         $("#complex").text(data.complex);
    //         $("#street").text(data.street);
    //         $("#unitno").text(data.houseNumber);
    //         $("#postalCode").text(data.postalCode);
    //     }
    // });
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/history/findAll?",
        //data: "customerID=" + customerId,
        async: false,
        success: function (data) {
            //console.log(data);

            //loop through history
            $.each(data, function(history, historyData){

                //console.log(historyData.rent);

                //loop through customer
                $.each(historyData.invoices, function(customer, customerData){
                    //console.log(customerData);
                    //console.log(customerData.name);
                    $("#name").text(customerData.name);
                    $("#surname").text(customerData.surname);
                    $("#email").text(customerData.email);
                    $("#city").text(customerData.city);
                    $("#province").text(customerData.province);
                    $("#complex").text(customerData.complex);
                    $("#street").text(customerData.street);
                    $("#unitno").text(customerData.houseNumber);
                    $("#postalCode").text(customerData.postalCode);
                });
                $.each(historyData.rent, function(rent, rentData){

                    console.log(historyData.rent.id);
                    if(historyData.invoices.id == invoiceID){
                        console.log(historyData.invoices.id );
                        // console.log(historyData.rent.totaPrice);
                        console.log("im in");
                    }



                    // htmlData += '<td>invoiced' + q.id+ '</td>';
                });
                    //console.log(rent);
                    //console.log(rentData.rentDate + " " +rentData.totalPrice);
                    // if(rentID == m.id)
                    // { htmlData += '<td>rented' + m.totalPrice+ '</td>';
                    //     htmlData += '</tr>';
                    //     $("#table tbody").append(htmlData);
                    // $.each(m, function(k, p){
                    //     console.log(p);
                    //     // if(rentID == m.id)
                    //     // { htmlData += '<td>rented' + m.totalPrice+ '</td>';
                    //     //     htmlData += '</tr>';
                    //     //     $("#table tbody").append(htmlData);
                    //
                    // });
                    //loop through invoice






                // $.each(invoiceData, function(customer, customerData){
                //     console.log(customerData);
                //     htmlData += '<td>invoiced' + s.id+ '</td>';
                // });
                // //
                //
                //
                //
                //
                });

            // var htmlData = '';
            // htmlData += '<tr>';
            // htmlData += '<td>' + v.id + '</td>';
            // htmlData += '<td>' + v.make + '</td>';
            // htmlData += '<td>' + v.model + '</td>';
            // htmlData += '<td>' + v.year + '</td>';
            // htmlData += '<td>' + v.numberPlate + '</td>';
            // htmlData += '<td>' + v.status + '</td>';
            // htmlData += '<td><a href="" class="btn btn-outline-warning" data-value="'+v.id+'" id="edit">Edit</a><a href="" class="btn btn-outline-danger" data-value="'+v.id+'" id="delete">Delete</a><br /></td>';
            // htmlData += '</tr>';
            // $("#table tbody").append(htmlData);

        }
    });


});
