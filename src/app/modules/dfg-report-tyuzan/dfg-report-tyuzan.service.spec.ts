import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportTyuzanService } from './dfg-report-tyuzan.service';

describe('DfgReportTyuzanService', () => {
  let service: DfgReportTyuzanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportTyuzanService],
    }).compile();

    service = module.get<DfgReportTyuzanService>(DfgReportTyuzanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
