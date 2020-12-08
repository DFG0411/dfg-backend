import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportSalesService } from './dfg-report-sales.service';

describe('DfgReportSalesService', () => {
  let service: DfgReportSalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportSalesService],
    }).compile();

    service = module.get<DfgReportSalesService>(DfgReportSalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
