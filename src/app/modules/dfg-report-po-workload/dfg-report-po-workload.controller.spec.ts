import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoWorkloadController } from './dfg-report-po-workload.controller';

describe('DfgReportPoWorkloadController', () => {
  let controller: DfgReportPoWorkloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoWorkloadController],
    }).compile();

    controller = module.get<DfgReportPoWorkloadController>(DfgReportPoWorkloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
