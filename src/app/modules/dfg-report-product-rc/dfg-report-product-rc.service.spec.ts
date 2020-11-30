import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportProductRcService } from './dfg-report-product-rc.service';

describe('DfgReportProductRcService', () => {
  let service: DfgReportProductRcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportProductRcService],
    }).compile();

    service = module.get<DfgReportProductRcService>(DfgReportProductRcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
