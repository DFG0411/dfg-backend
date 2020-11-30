import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPo24mService } from './dfg-report-po-24m.service';

describe('DfgReportPo24mService', () => {
  let service: DfgReportPo24mService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPo24mService],
    }).compile();

    service = module.get<DfgReportPo24mService>(DfgReportPo24mService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
