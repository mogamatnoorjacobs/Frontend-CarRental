

//$(document).ready(function() {
//
//
//    //alert(ParametersArray[1]);
//    $.getJSON('http://localhost:8080/user/findByUserID?userID='+ ParametersArray[1]+'', function (data) {
//        $.each(data, function (index) {
//            //alert(data[index].id);
//            //alert("test"+ParametersArray[1]);
//            //alert(data[index].name);
//            document.getElementById("txtuserID").value = data.userID;
//            document.getElementById("txtName").value = data.name;
//            document.getElementById("txtSurname").value = data.surname;
//            document.getElementById("txtPassword").value = data.password;
//            document.getElementById("txtRole").value = data.role;
//
//           // alert(data[index].name);
//        });
//    });
//});
//******************************UserLogin********************************
function validateuserID(userID) {
    if (userID === "") {
        $("#erroruserID").text("Please enter a userID.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtuserID").click(function () {
            $("#erroruserID").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    //else if (/[^a-zA-Z]/.test(userID)) {
    //    $("#erroruserID").text("Only alphabetic characters allowed in the field.").show();
    //    //++errorInput;
    //
    //    //fade out the error text when the user clicks on the textbox
    //    $("#txtuserID").click(function () {
    //        $("#erroruserID").fadeOut('slow');
    //    });
    //    return false;
    //
    //    //prevent the form from being submitted if there is an error
    //    event.preventDefault();
    //}
    else
        return userID;
}

function validatePassword(password) {
    if (password === "") {
        $("#errorPassword").text("Please enter a password.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtPassword").click(function () {
            $("#errorPassword").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (/[^a-zA-Z]/.test(password)) {
        $("#errorPassword").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtPassword").click(function () {
            $("#errorPassword").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return password;
}

function validate() {

    var userID = validateuserID($("#txtuserID").val());
    var password = validatePassword($("#txtPassword").val());

    if (userID == false || password == false ) {
        event.preventDefault();
        return;
    }
    else {
        $(document).ready(function() {


            $.getJSON('http://localhost:8080/user/findAllUsers', function (data) {
                $.each(data, function (index) {
                    //alert(data[index].id);
                    $("<tr> <td>"+data[index].userID+" </td> " +
                        "<td>" + data[index].name
                        +" </td>  " +
                        "<td>"+  data[index].surname +" </td> " +
                        "<td>"+  data[index].password +" </td> " +
                            "</tr>")
                        .prependTo(".userTable")
                    //alert(data[index].name);
                });
            });
        });
        //$(document).ready(function () {
        //
        //    $.ajax({
        //        url: "http://localhost:8080/user/findByUserID?" +
        //        "userID=" + $("#txtuserID").val()
        //        //+ "" +       "&password=" + $("#txtPassword").val() + ""
        //
        //
        //    }).then(function (data) {
        //
        //
        //        if (data.toString() !== "") {
        //
        //             alert("User Logged in" )
        //
        //        }
        //        else {
        //            alert("Login Failed");
        //        }
        //
        //    });
        //});
    }
}
//*************************8
function login(){

    $(document).ready(function() {

        $.ajax({
            url: "http://localhost:8080/user/findByUserID?"+"userID="+document.getElementById("userID").value
          //  +"" +"&password="+document.getElementById("password").value+"" + ""
        }).then(function(data) {

            dataType: 'json';

            if(data.toString() !== ""){

                //alert("Login Successful");

                localStorage.clear();

                localStorage.setItem('userID', data[0].userID);

                localStorage.setItem('password', data[0].password);

                window.location.href = 'homepage.html';

            }

            else{

                localStorage.clear();

                alert("Login failed");

            }



        });

    });



}