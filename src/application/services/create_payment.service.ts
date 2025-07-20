import { PaymentMethodDTO } from "src/domain/payment/dto/payment.dto";
import { PaymentResultDTO } from "src/domain/payment/dto/payment_result.dto";
import { StartPaymentProcess } from "src/domain/payment/use_cases/payment_provider";

export class PaymentService implements StartPaymentProcess {
    async process(data: PaymentMethodDTO): Promise<PaymentResultDTO> {
        return new PaymentResultDTO({payment_id: '123'})
    }
}