
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
                "<td  id='deleteCustomer'> " +
                "<input class=\"btn btn-outline-danger\" type='button' value='Delete Customer' onclick='deleteCustomer("+data[index].id+"); return false;'> </input> </td> " +
                "</tr>")
                .prependTo(".customersTable")
                //alert(data[index].name);
        });
    });

});

function deleteCustomer(customerID){
    var txt;
    var r = confirm("Click OK to Delete");
    if (r == true) {
        if($.getJSON('http://localhost:8080/customer/deleteCustomer?customerID='+customerID+'', function (data) {
                $.each(data, function (index) { });}) ) {
            location.reload();
        }
    } else {
        txt = "Customer not Deleted";
    }

}

//function to make sure the delete href above are triggered

//function deleteCustomer(customerID){
//
//    alert
//    $.getJSON('http://localhost:8080/customer/deleteCustomer?customerID='+customerID+'', function (data) {
//        $.each(data, function (index) {
//            //alert(data[index].id);
//
//            if(data[index].email == ""){
//
//                  alert("Customer deleted");
//            }
//            else {
//                alert("deleting customer failed");
//            }
//        });
//    });
//}