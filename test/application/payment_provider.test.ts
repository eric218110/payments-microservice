import { PaymentService } from "src/application/services/create_payment.service";
import type { StartPaymentProcess } from "src/domain/payment/use_cases/payment_provider";

describe("(PaymentService)", () => {
    const sut: StartPaymentProcess = new PaymentService();

    it("shold be PaymentService not be empty", () => {
        expect(sut).toBeDefined()
    })
})