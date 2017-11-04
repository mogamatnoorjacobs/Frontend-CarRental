function validateName(name) {
    if (name === "") {
        $("#errorName").text("Please enter a name.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtName").click(function () {
            $("#errorName").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (/[^a-zA-Z]/.test(name)) {
        $("#errorName").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtName").click(function () {
            $("#errorName").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return name;
}

function validateSurname(surname) {
    if (surname === "") {
        $("#errorSurname").text("Please enter a Surname.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtSurname").click(function () {
            $("#errorSurname").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (/[^a-zA-Z-, ]/.test(surname)) {
        $("#errorSurname").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtSurname").click(function () {
            $("#errorSurname").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return surname;
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

function validateRole(role) {
    if (role === "") {
        $("#errorRole").text("Please enter a role admin or user.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtRole").click(function () {
            $("#errorRole").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (/[^a-zA-Z]/.test(role)) {
        $("#errorRole").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtRole").click(function () {
            $("#errorRole").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return role;
}


function validate() {

    var name = validateName($("#txtName").val());
    var surname = validateSurname($("#txtSurname").val());
    var password = validatePassword($("#txtPassword").val());
    var role = validateRole($("#txtRole").val());


    if (name == false || surname == false || password == false || role == false) {
    evet.preventDefault();
        return;
    }
    else {

        $(document).ready(function () {

            $.ajax({
                url: "http://localhost:8080/user/addUser?" +
                "name=" + $("#txtName").val()+ "&" +
                "&surname=" + $("#txtSurname").val() + "&" +
                "&password=" + $("#txtPassword").val() + "&" +
                "&role=" + $("#txtRole").val()


            }).then(function (data) {


                if (data.toString() !== "") {

                    alert("New User Added");
                }
                else {
                    alert("Adding User Failed");
                }

            });
        });
    }
}