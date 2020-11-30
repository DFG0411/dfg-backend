import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoService } from './dfg-report-po.service';

describe('DfgReportPoService', () => {
  let service: DfgReportPoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoService],
    }).compile();

    service = module.get<DfgReportPoService>(DfgReportPoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
