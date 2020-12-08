import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoWorkloadHService } from './dfg-report-po-workload-h.service';

describe('DfgReportPoWorkloadHService', () => {
  let service: DfgReportPoWorkloadHService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoWorkloadHService],
    }).compile();

    service = module.get<DfgReportPoWorkloadHService>(DfgReportPoWorkloadHService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
