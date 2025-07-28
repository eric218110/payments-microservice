import { HistoryController } from 'src/presentation/history/controller/history.controller';

describe('(HistoryController)', () => {
  const sut = new HistoryController();

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
