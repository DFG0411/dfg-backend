import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoWorkloadHController } from './dfg-report-po-workload-h.controller';

describe('DfgReportPoWorkloadHController', () => {
  let controller: DfgReportPoWorkloadHController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoWorkloadHController],
    }).compile();

    controller = module.get<DfgReportPoWorkloadHController>(DfgReportPoWorkloadHController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
