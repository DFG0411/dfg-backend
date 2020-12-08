import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoPricecompareService } from './dfg-report-po-pricecompare.service';

describe('DfgReportPoPricecompareService', () => {
  let service: DfgReportPoPricecompareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoPricecompareService],
    }).compile();

    service = module.get<DfgReportPoPricecompareService>(DfgReportPoPricecompareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
