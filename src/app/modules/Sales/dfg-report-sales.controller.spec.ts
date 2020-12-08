import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportSalesController } from './dfg-report-sales.controller';

describe('DfgReportSalesController', () => {
  let controller: DfgReportSalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportSalesController],
    }).compile();

    controller = module.get<DfgReportSalesController>(DfgReportSalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
