import { TvaModule } from './tva.module';

describe('TvaModule', () => {
  let tvaModule: TvaModule;

  beforeEach(() => {
    tvaModule = new TvaModule();
  });

  it('should create an instance', () => {
    expect(tvaModule).toBeTruthy();
  });
});
