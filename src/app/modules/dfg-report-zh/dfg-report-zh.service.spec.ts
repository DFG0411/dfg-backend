import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportZhService } from './dfg-report-zh.service';

describe('DfgReportZhService', () => {
  let service: DfgReportZhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportZhService],
    }).compile();

    service = module.get<DfgReportZhService>(DfgReportZhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
