import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportProductRchincdService } from './dfg-report-product-rchincd.service';

describe('DfgReportProductRchincdService', () => {
  let service: DfgReportProductRchincdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportProductRchincdService],
    }).compile();

    service = module.get<DfgReportProductRchincdService>(DfgReportProductRchincdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
