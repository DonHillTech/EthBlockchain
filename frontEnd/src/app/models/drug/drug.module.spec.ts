import { DrugModule } from './drug.module';

describe('DrugModule', () => {
  let drugModule: DrugModule;

  beforeEach(() => {
    drugModule = new DrugModule();
  });

  it('should create an instance', () => {
    expect(drugModule).toBeTruthy();
  });
});
