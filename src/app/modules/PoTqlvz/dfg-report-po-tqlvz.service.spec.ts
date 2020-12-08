import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoTqlvzService } from './dfg-report-po-tqlvz.service';

describe('DfgReportPoTqlvzService', () => {
  let service: DfgReportPoTqlvzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoTqlvzService],
    }).compile();

    service = module.get<DfgReportPoTqlvzService>(DfgReportPoTqlvzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
