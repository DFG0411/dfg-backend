import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportZzzhService } from './dfg-report-zzzh.service';

describe('DfgReportZzzhService', () => {
  let service: DfgReportZzzhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportZzzhService],
    }).compile();

    service = module.get<DfgReportZzzhService>(DfgReportZzzhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
