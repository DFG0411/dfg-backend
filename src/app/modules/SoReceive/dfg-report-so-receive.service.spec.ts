import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportSoReceiveService } from './dfg-report-so-receive.service';

describe('DfgReportSoReceiveService', () => {
  let service: DfgReportSoReceiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportSoReceiveService],
    }).compile();

    service = module.get<DfgReportSoReceiveService>(DfgReportSoReceiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
