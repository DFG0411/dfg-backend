import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportProductRchincdallService } from './dfg-report-product-rchincdall.service';

describe('DfgReportProductRchincdallService', () => {
  let service: DfgReportProductRchincdallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportProductRchincdallService],
    }).compile();

    service = module.get<DfgReportProductRchincdallService>(DfgReportProductRchincdallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
