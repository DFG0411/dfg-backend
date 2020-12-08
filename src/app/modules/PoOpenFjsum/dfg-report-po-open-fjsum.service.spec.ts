import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoOpenFjsumService } from './dfg-report-po-open-fjsum.service';

describe('DfgReportPoOpenFjsumService', () => {
  let service: DfgReportPoOpenFjsumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoOpenFjsumService],
    }).compile();

    service = module.get<DfgReportPoOpenFjsumService>(DfgReportPoOpenFjsumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
