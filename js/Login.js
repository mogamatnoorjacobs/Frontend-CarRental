$(document).ready(function() {
    var URLlink = "http://localhost:8080";
    //load data to the user table
    $.ajax({
        type: "POST",
        dataType: "json",
        url: URLlink + "/user/addUser?",
        data: "name=admin@vehicleRental.com&surname=admin&password=admin123&role=admin",
        async: false,
        success: function (response) {

        }

    });
});
//$(document).ready(function(){


//});