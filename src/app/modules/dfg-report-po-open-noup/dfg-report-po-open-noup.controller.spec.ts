import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoOpenNoupController } from './dfg-report-po-open-noup.controller';

describe('DfgReportPoOpenNoupController', () => {
  let controller: DfgReportPoOpenNoupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoOpenNoupController],
    }).compile();

    controller = module.get<DfgReportPoOpenNoupController>(DfgReportPoOpenNoupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
