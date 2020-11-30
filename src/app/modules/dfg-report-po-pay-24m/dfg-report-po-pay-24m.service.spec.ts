import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoPay24mService } from './dfg-report-po-pay-24m.service';

describe('DfgReportPoPay24mService', () => {
  let service: DfgReportPoPay24mService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoPay24mService],
    }).compile();

    service = module.get<DfgReportPoPay24mService>(DfgReportPoPay24mService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
