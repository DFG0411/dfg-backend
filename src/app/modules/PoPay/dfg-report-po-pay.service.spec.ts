import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoPayService } from './dfg-report-po-pay.service';

describe('DfgReportPoPayService', () => {
  let service: DfgReportPoPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoPayService],
    }).compile();

    service = module.get<DfgReportPoPayService>(DfgReportPoPayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
