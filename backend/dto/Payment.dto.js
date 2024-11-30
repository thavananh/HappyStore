class PaymentDTO {
    PaymentID;
    PaymentMethod;
    Amount;
    constructor(data) {
        this.PaymentID = data.PaymentID;
        this.PaymentMethod = data.PaymentMethod;
        this.Amount = data.Amount;
    }
}

export default PaymentDTO;
