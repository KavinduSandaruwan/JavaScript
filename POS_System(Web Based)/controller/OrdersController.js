// search customer
$("#txtCustomerID").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let customer = searchCustomer2($(this).val());
        if (customer != null) {
            $("#txtCustomerName2").val(customer.getCustomerName());
        } else {
            clearcustomer2();
        }
    }
});

function searchCustomer2(customerID) {
    for (var i in customerTable) {
        if (customerTable[i].getCustomerID() == customerID) return customerTable[i];
    }
    return null;
}

function clearcustomer2() {
    $('#txtCustomerID').val("");     
}

// search item
$("#txtItemCode2").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let item = searchItem2($(this).val());
        if (item != null) {
            $("#txtItemName2").val(item.getItemName());
            $("#txtInStocks2").val(item.getQtyOnHand());
            $("#txtUnitPrice2").val(item.getUnitPrice());
        } else {
            clearcustomer2();
        }
    }
});

function searchItem2(itemCode) {
    for (var i in itemTable) {
        if (itemTable[i].getItemCode() == itemCode) return itemTable[i];
    }
    return null;
}

function clearItem2() {
    $('#txtItemCode2').val("");     
}

// add to list
$('#btnAddToList').click(function () {
    $('#tblLIst tbody').append('<tr>' +
        '<td>' + $('#txtItemCode2').val() + '</td>' +
        '<td>' + $('#txtItemName2').val() + '</td>' +
        '<td>' + $('#txtUnitPrice2').val() + '</td>' +
        '<td>' + $('#txtQuantity').val() + '</td>' +
        '<td>' + $('#txtQuantity').val()* $('#txtUnitPrice2').val() + '</td>' +
        '</tr>');
});
