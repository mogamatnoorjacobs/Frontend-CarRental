
var URLlink = "http://localhost:8080";

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

        var matchingEmails = null;

        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/customer/findByEmail?",
            data: "email=" + email,
            async: false,
            success: function(response)
            {
                //console.log(response);
                matchingEmails = response.email;
                //$("#successMessage3").html(matchingEmails + " its empty 3");

            }

        });

        if(email == matchingEmails)
        {
            $("#errorEmail").html("The email address already exists, please try again");
            $("#txtEmail").click(function(){
                $("#errorEmail").fadeOut('slow');
            });
            event.preventDefault();
            return 0;
        }
        else if (email === "") {
            $("#errorEmail").text("Please enter a Email address.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtEmail").click(function () {
                $("#errorEmail").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if(validEmail(email) === false) {
            $("#errorEmail").text("Email is invalid! Please try again.").show();
            //++errorInput;
            //fade out the error text when the user clicks on the textbox
            $("#txtEmail").click(function () {
                $("#errorEmail").fadeOut('slow');
            });
        }
        else
            return email;

        function validEmail(eEmail)
        {
            var filter = /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;
            if(filter.test(eEmail))
                return true;
            else
                return false;
        }

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
                var customerData =  "name=" + name+ "&surname=" + surname+ "&email=" + email + "&city=" + city +
                "&province=" + province + "&complex=" + complex + "&street=" + street + "&houseNumber=" + houseNumber + "" +
                "&postalCode=" + postalCode;

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: URLlink + "/customer/addCustomer?",
                    data: customerData,
                    success: function (response) {
                        location.href="listAllCustomers.html";
                    },
                    error: function(xhr){
                        alert("Adding Customer Failed");
                    }
                })
            });
        }
}


