/**
 * Created by thabomoopa on 01/11/2017.
 */
$(document).ready(function() {
var URLlink = "http://localhost:8080";
    //ajax function to retrieve the categories from the database
    // $.ajax({
    //     type: "GET",
    //     dataType: "json",
    //     url: URLlink + "/customer/findAll?",
    //     //data: name,
    //     async: false,
    //     success: function(data)
    //     {
    //         $.each(data, function(k, v){
    //             $("#categoryButtons").append('<button id="categoryBtn" class="btn btn-outline-success" value='+v.id+'>'+v.name+'</button>');
    //
    //         });
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
        var customerSelection_button = $(this).val();
        sessionStorage.setItem("customerID", customerSelection_button);
        event.preventDefault();
        location.href="rent.html";
    });
});


