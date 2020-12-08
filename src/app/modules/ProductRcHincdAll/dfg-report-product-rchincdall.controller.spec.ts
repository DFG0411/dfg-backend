import { Test, TestingModule } from '@nestjs/testing';
import { ProductrcHincdAll } from './dfg-report-product-rchincdall.controller';

describe('DfgReportProductRchincdallController', () => {
  let controller: ProductrcHincdAll;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductrcHincdAll],
    }).compile();

    controller = module.get<ProductrcHincdAll>(ProductrcHincdAll);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
