import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoBv24mService } from './dfg-report-po-bv-24m.service';

describe('DfgReportPoBv24mService', () => {
  let service: DfgReportPoBv24mService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoBv24mService],
    }).compile();

    service = module.get<DfgReportPoBv24mService>(DfgReportPoBv24mService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
