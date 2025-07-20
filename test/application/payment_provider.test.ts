import { PaymentService } from "src/application/services/create_payment.service";
import { PaymentResultDTO } from "src/domain/payment/dto/payment_result.dto";
import type { StartPaymentProcess } from "src/domain/payment/use_cases/payment_provider";
import { paymentMock } from "./payment_provider.mock";

describe("(PaymentService)", () => {
    const sut: StartPaymentProcess = new PaymentService();

    it("shold be PaymentService not be empty", () => {
        expect(sut).toBeDefined()
    })

    it("should be service return valid response on start payment process", async () => {
        const response = await sut.process(paymentMock.paymentMethodDTO)

        expect(response).toBeDefined()
        expect(response).toBeInstanceOf(PaymentResultDTO)
        expect(response.payment_id).toBeDefined()
    })
})