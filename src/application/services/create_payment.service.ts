import { PaymentMethodDTO } from "src/domain/payment/dto/payment.dto";
import { PaymentResultDTO } from "src/domain/payment/dto/payment_result.dto";
import { StartPaymentProcess } from "src/domain/payment/use_cases/payment_provider";

export class PaymentService implements StartPaymentProcess {
    process(data: PaymentMethodDTO): Promise<PaymentResultDTO> {
        throw new Error("Method not implemented.");
    }
}