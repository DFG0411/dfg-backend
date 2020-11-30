import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoWorkloadVController } from './dfg-report-po-workload-v.controller';

describe('DfgReportPoWorkloadVController', () => {
  let controller: DfgReportPoWorkloadVController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoWorkloadVController],
    }).compile();

    controller = module.get<DfgReportPoWorkloadVController>(DfgReportPoWorkloadVController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
