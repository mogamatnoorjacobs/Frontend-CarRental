
$(document).ready(function() {


    $.getJSON('http://localhost:8080/customer/findAll', function (data) {
        $.each(data, function (index) {
            //alert(data[index].id);
            $("<tr> <td>"+data[index].id+" </td> " +
                "<td>" + data[index].name
                +" </td>  " +
                "<td>"+  data[index].surname +" </td> " +
                "<td>"+  data[index].email +" </td> " +
                "<td> <a href='updateCustomer.html?customerID="+data[index].id+"' > Update Customer </a> </td> " +
                "</tr>")
                .prependTo(".customersTable")
                //alert(data[index].name);
        });
    });
});