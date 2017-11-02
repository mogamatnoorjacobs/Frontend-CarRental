/**
 * Created by thabomoopa on 01/11/2017.
 */
$(document).ready(function() {

    //variable to hold the link for the post, get and delete requests
    var URLlink = "http://localhost:8080";

    //variable to the invoice number
    var invoiceID = 0;

    //variable to hold the selected customerId
    var customerSelection_button = 0;

            //function to read all cars in the database and print to table
            $.ajax({
                type: "GET",
                dataType: "json",
                url: URLlink + "/customer/findAll?",
                //data: name,
                async: false,
                success: function(data)
                {
                    $.each(data, function(k, v){
                        var htmlData = '';
                        htmlData += '<tr>';
                        htmlData += '<td>' + v.id + '</td>';
                        htmlData += '<td>' + v.name + '</td>';
                        htmlData += '<td>' + v.surname + '</td>';
                        htmlData += '<td>' + v.email + '</td>';
                        htmlData += '<td><button class="btn btn-outline-warning" value="'+v.id+'" id="selection">Select</a>';
                        htmlData += '</tr>';
                        $("#table tbody").append(htmlData);

                    });
                }
            });

        //}
   // });
    $("button").click(function () {
        customerSelection_button = $(this).val();


        //create an invoice data
        $.ajax({
            type: "POST",
            dataType: "json",
            url: URLlink + "/invoice/" + customerSelection_button + "/addInvoice?",
            //data: "orderDate=" + todayDate,
            async: false,
            success: function (data) {
                //ID for the order number returned when post is used to send data to database
                invoiceID = data.id;
                sessionStorage.setItem("sessionInfo","_" + customerSelection_button + "_" +invoiceID);

                event.preventDefault();
                location.href="rent.html";
            }
        });



    });


});


