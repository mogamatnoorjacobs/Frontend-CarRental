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
    console.log(sessionData);

    //create today's date and display on the html
    var currentDate = new Date();

    var todayDate = currentDate.getDate() + '/' + currentDate.getMonth() + '/'+currentDate.getFullYear();

    //send the data to the html script
    $("#invoiceNo").text(invoiceID);
    $("#invoiceDate").text(todayDate);

    //find the customer details of the transaction
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/customer/findCustomerByID",
        data: "customerID=" + customerId,
        async: false,
        success: function (data) {
            $("#name").text(data.name);
            $("#surname").text(data.surname);
            $("#email").text(data.email);
            $("#city").text(data.city);
            $("#province").text(data.province);
            $("#complex").text(data.complex);
            $("#street").text(data.street);
            $("#unitno").text(data.houseNumber);
            $("#postalCode").text(data.postalCode);
        }
    });
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/"+invoiceID+"/findAllRentalBasedInvoice?",
        //data: "customerID=" + customerId,
        async: false,
        success: function (data) {
            data.id;
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
