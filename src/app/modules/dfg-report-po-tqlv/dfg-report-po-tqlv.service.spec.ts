import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoTqlvService } from './dfg-report-po-tqlv.service';

describe('DfgReportPoTqlvService', () => {
  let service: DfgReportPoTqlvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoTqlvService],
    }).compile();

    service = module.get<DfgReportPoTqlvService>(DfgReportPoTqlvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
