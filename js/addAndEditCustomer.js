


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

    function validateHouseNumber(houseNumber) {
        if (houseNumber === "") {
            $("#errorHouseNumber").text("Please enter a house number name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtHouseNumber").click(function () {
                $("#errorHouseNumber").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (isNaN(houseNumber)) {
            $("#errorHouseNumber").text("Only valid numbers are allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtHouseNumber").click(function () {
                $("#errorHouseNumber").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return houseNumber;
    }

    function validateCity(city) {
        if (city === "") {
            $("#errorCity").text("Please enter a City name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtCity").click(function () {
                $("#errorCity").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(city)) {
            $("#errorCity").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtCity").click(function () {
                $("#errorCity").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return city;
    }

    function validateProvince(province) {
        if (province === "") {
            $("#errorProvince").text("Please enter a Province name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtProvince").click(function () {
                $("#errorProvince").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(province)) {
            $("#errorProvince").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txProvince").click(function () {
                $("#errorProvince").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return province;
    }

    function validatePostalCode(postalCode) {
        if (postalCode === "") {
            $("#errorPostalCode").text("Please enter a Postal Code name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtPostalCode").click(function () {
                $("#errorPostalCode").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (isNaN(postalCode)) {
            $("#errorPostalCode").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtPostalCode").click(function () {
                $("#errorPostalCode").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return postalCode;
    }

    function validateComplex(complex) {
        if (complex === "") {
            $("#errorComplex").text("Please enter a Complex name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtComplex").click(function () {
                $("#errorComplex").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(complex)) {
            $("#errorComplex").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtComplex").click(function () {
                $("#errorComplex").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return complex;
    }

    function validateStreet(street) {
        if (street === "") {
            $("#errorStreet").text("Please enter a Street name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtStreet").click(function () {
                $("#errorStreet").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(street)) {
            $("#errorStreet").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtStreet").click(function () {
                $("#errorStreet").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return street;
    }


    function validateEmail(email) {
        if (email === "") {
            $("#errorEmail").text("Please enter a Email address.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtEmail").click(function () {
                $("#errorEmail").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        // else if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        // $("#errorEmail").text("This is not a valid email address.").show();
        //     //++errorInput;
        //
        //     //fade out the error text when the user clicks on the textbox
        //     $("#txtEmail").click(function () {
        //         $("#errorEmail").fadeOut('slow');
        //     });
        //     return false;
        //
        //     //prevent the form from being submitted if there is an error
        //     event.preventDefault();
        // }
        else
            return email;
    }


    function validate() {

        var name = validateName($("#txtName").val());
        var surname = validateSurname($("#txtSurname").val());
        var email = validateEmail($("#txtEmail").val());
        var city = validateCity($("#txtCity").val());
        var houseNumber = validateHouseNumber($("#txtHouseNumber").val());
        var province = validateProvince($("#txtProvince").val());
        var postalCode = validatePostalCode($("#txtPostalCode").val());
        var complex = validateComplex($("#txtComplex").val());
        var street = validateStreet($("#txtStreet").val());

        if (name == false || surname == false || email == false || houseNumber == false
            || province == false || postalCode == false || complex == false
            || street == false || city == false) {
            event.preventDefault();
            return;
        }
        else {

            $(document).ready(function () {

                $.ajax({
                    url: "http://localhost:8080/customer/addCustomer?" +
                    "name=" + $("#txtName").val()+ "" +
                    "&surname=" + $("#txtSurname").val() + "" +
                    "&email=" + $("#txtEmail").val() + "" +
                    "&city=" + $("#txtCity").val() + "" +
                    "&province=" + $("#txtProvince").val() + "" +
                    "&complex=" + $("#txtComplex").val() + "" +
                    "&street=" + $("#txtStreet").val() + "" +
                    "&houseNumber=" + $("#txtHouseNumber").val() + "" +
                    "&postalCode=" + $("#txtPostalCode").val() + "" +
                    ""

                }).then(function (data) {


                    if (data.toString() !== "") {

                        alert("New Customer Added");
                    }
                    else {
                        alert("Adding Customer Failed");
                    }

                });
            });
        }
}


