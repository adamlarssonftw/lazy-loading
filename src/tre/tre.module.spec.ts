import { TreModule } from './tre.module';

describe('TreModule', () => {
  let treModule: TreModule;

  beforeEach(() => {
    treModule = new TreModule();
  });

  it('should create an instance', () => {
    expect(treModule).toBeTruthy();
  });
});
