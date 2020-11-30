import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoBvService } from './dfg-report-po-bv.service';

describe('DfgReportPoBvService', () => {
  let service: DfgReportPoBvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoBvService],
    }).compile();

    service = module.get<DfgReportPoBvService>(DfgReportPoBvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
