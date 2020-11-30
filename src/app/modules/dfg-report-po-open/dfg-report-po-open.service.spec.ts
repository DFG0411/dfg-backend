import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoOpenService } from './dfg-report-po-open.service';

describe('DfgReportPoOpenService', () => {
  let service: DfgReportPoOpenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoOpenService],
    }).compile();

    service = module.get<DfgReportPoOpenService>(DfgReportPoOpenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
