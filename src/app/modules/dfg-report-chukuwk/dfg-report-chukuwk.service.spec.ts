import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportChukuwkService } from './dfg-report-chukuwk.service';

describe('DfgReportChukuwkService', () => {
  let service: DfgReportChukuwkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportChukuwkService],
    }).compile();

    service = module.get<DfgReportChukuwkService>(DfgReportChukuwkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
