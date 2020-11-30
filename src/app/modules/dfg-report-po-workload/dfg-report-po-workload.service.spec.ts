import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoWorkloadService } from './dfg-report-po-workload.service';

describe('DfgReportPoWorkloadService', () => {
  let service: DfgReportPoWorkloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoWorkloadService],
    }).compile();

    service = module.get<DfgReportPoWorkloadService>(DfgReportPoWorkloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
