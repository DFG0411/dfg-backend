import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportProductRchincdController } from './dfg-report-product-rchincd.controller';

describe('DfgReportProductRchincdController', () => {
  let controller: DfgReportProductRchincdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportProductRchincdController],
    }).compile();

    controller = module.get<DfgReportProductRchincdController>(DfgReportProductRchincdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
