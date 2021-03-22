function OrderDTO(orderId, date, cusId){
    var __orderId=orderId;
    var __date=date;
    var __cusId=cusId;
     
    this.getOrderId = function () {
        return __orderId;
    }
    this.getDate = function () {
        return __date;
    }
    this.getCusId = function () {
        return __cusId;
    }

    this.setOrderId  = function (newOrderId) {
        __orderId = newOrderId;
    }
    this.setDate = function (newDate) {
        __date = newDate;
    }
    this.setCusId = function (newCusId) {
        __cusId = newCusId;
    }
     

}