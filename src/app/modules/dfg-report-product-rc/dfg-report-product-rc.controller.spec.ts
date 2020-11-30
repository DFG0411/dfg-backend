import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportProductRcController } from './dfg-report-product-rc.controller';

describe('DfgReportProductRcController', () => {
  let controller: DfgReportProductRcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportProductRcController],
    }).compile();

    controller = module.get<DfgReportProductRcController>(DfgReportProductRcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
