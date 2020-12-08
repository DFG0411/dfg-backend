import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportSaleszmService } from './dfg-report-saleszm.service';

describe('DfgReportSaleszmService', () => {
  let service: DfgReportSaleszmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportSaleszmService],
    }).compile();

    service = module.get<DfgReportSaleszmService>(DfgReportSaleszmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
