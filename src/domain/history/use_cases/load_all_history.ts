import { HistoryResponseDTO } from '../dto/history_response.dto';

export interface LoadAllHistoryByTenant {
  onLoadByTenant(tenantId: string): Promise<HistoryResponseDTO[]>;
}
