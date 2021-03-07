import { UnicornifyService } from './unicornify.service';

describe('UnicornifyService', () => {
  let service: UnicornifyService;

  beforeEach(() => {
    service = new UnicornifyService();
  });

  it('defaults count to 0', () => {
    expect(service.count).toBe(0);
  });

  it('updates count after adding unicorns', () => {
    service.add();
    service.add();
    service.add();
    expect(service.count).toBe(3);
  });

  it('resets count after removing unicorns', () => {
    service.add();
    expect(service.count).toBe(1);
    service.remove();
    expect(service.count).toBe(0);
  });
});
