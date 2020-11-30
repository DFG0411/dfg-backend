import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportProductRchincdallController } from './dfg-report-product-rchincdall.controller';

describe('DfgReportProductRchincdallController', () => {
  let controller: DfgReportProductRchincdallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportProductRchincdallController],
    }).compile();

    controller = module.get<DfgReportProductRchincdallController>(DfgReportProductRchincdallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
