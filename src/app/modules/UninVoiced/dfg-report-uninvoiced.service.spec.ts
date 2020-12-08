import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportUninvoicedService } from './dfg-report-uninvoiced.service';

describe('DfgReportUninvoicedService', () => {
  let service: DfgReportUninvoicedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportUninvoicedService],
    }).compile();

    service = module.get<DfgReportUninvoicedService>(DfgReportUninvoicedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
