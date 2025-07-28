import { HistoryController } from 'src/presentation/history/controller/history.controller';
import { fakes } from './history.controller.fake';

describe('(HistoryController)', () => {
  const sut = new HistoryController(fakes.loadAllHistoryByTenantFake);

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should be service call', async () => {
    const spy = jest.spyOn(fakes.loadAllHistoryByTenantFake, 'onLoadByTenant');

    await sut.handleHistoryPayment({ tenantId: '123' });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
