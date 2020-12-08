import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoOpenNoupService } from './dfg-report-po-open-noup.service';

describe('DfgReportPoOpenNoupService', () => {
  let service: DfgReportPoOpenNoupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DfgReportPoOpenNoupService],
    }).compile();

    service = module.get<DfgReportPoOpenNoupService>(DfgReportPoOpenNoupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
