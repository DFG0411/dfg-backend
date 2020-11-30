import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoWorkloadVService } from './dfg-report-po-workload-v.service';

describe('DfgReportPoWorkloadVService', () => {
  let service: DfgReportPoWorkloadVService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoWorkloadVService],
    }).compile();

    service = module.get<DfgReportPoWorkloadVService>(DfgReportPoWorkloadVService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
