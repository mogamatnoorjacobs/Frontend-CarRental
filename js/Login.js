function validate() {

    var userID = validateuserID($("#txtuserID").val());
    var password = validatePassword($("#txtPassword").val());

    if (userID == false || password == false) {
        event.preventDefault();
        return;
    }
    else {
        $(document).ready(function () {

            var userID = "userID=1";
            var URLlink = "http://localhost:8080";
//statement will load the sedan details
            $.ajax({
                type: "GET",
                dataType: "json",
                url: URLlink + "/user/findByUserID?",
                data: userID,
                async: false,
                success: function(data)
                {
                    alert(data.name);
                }


        });
    })
}
}