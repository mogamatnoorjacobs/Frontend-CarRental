function validate() {

    //var userName = validateuserID($("#txtuserID").val());
    // var password = validatePassword($("#txtPassword").val());

    //if (userName == false || password == false) {
    //    event.preventDefault();
    //    return;
    //}
    // else {
    // $(document).ready(function () {

    var userName = $("#txtuserID").val();
    var URLlink = "http://localhost:8080";
//statement will load the sedan details
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/user/findByUserName?",
        data: "name=" + userName,
        async: false,
        success: function (data) {
            console.log(data);
        }
    });
    // });
//}

    event.preventDefault();
    return;
}