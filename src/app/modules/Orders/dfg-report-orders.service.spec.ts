import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportOrdersService } from './dfg-report-orders.service';

describe('DfgReportOrdersService', () => {
  let service: DfgReportOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportOrdersService],
    }).compile();

    service = module.get<DfgReportOrdersService>(DfgReportOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
