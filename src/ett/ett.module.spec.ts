import { EttModule } from './ett.module';

describe('EttModule', () => {
  let ettModule: EttModule;

  beforeEach(() => {
    ettModule = new EttModule();
  });

  it('should create an instance', () => {
    expect(ettModule).toBeTruthy();
  });
});
