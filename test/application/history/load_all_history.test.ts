import { LoadAllHistoryByTenantService } from 'src/application/services/history/load_all_by_tenant.service';
import { fakes } from './load_all_history.fake';

describe('(LoadAllHistoryByTenantService)', () => {
  const sut = new LoadAllHistoryByTenantService(
    fakes.loadAllHistoryByTenantRepositoryFake,
  );

  it('should be call repository', async () => {
    const spy = jest.spyOn(
      fakes.loadAllHistoryByTenantRepositoryFake,
      'onLoadAllByTenantId',
    );

    await sut.onLoadByTenant('123');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
