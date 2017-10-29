$(document).ready(function() {
    var fired_button = 0;
    var days = 0;
    $(function () {
        $("#datepicker").datepicker({

        });

        $(function () {
            $("#datepicker2").datepicker({
                onSelect: function (dateText, inst) {
                    var datepicker = new Date($("#datepicker").val());

                    var datepicker2 = new Date($("#datepicker2").val());

                    // end - start returns difference in milliseconds
                    var diff = new Date(datepicker2 - datepicker);

                    // get days
                    days = diff/1000/60/60/24;

                    document.getElementById("txtDays").value = days;
                    //alert(fired_button);
                    $.ajax({
                        type: "GET",
                        dataType: "json",
                        url: URLlink + "/category/read?",
                        data: "id=" + fired_button,
                        async: false,
                        success: function(data)
                        {
                            var totalPrice = data.price * days;
                            document.getElementById("txtPrice").value = totalPrice;
                        }
                    });

                }
            });
        });
    });
    $("button").click(function(){
        fired_button = $(this).val();
        //alert(days);
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/category/read?",
            data: "id=" + fired_button,
            async: false,
            success: function(data)
            {
                var totalPrice = data.price * days;
                document.getElementById("txtPrice").value = totalPrice;
            }
        });

    });
});
