import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportSaleszmController } from './dfg-report-saleszm.controller';

describe('DfgReportSaleszmController', () => {
  let controller: DfgReportSaleszmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportSaleszmController],
    }).compile();

    controller = module.get<DfgReportSaleszmController>(DfgReportSaleszmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
