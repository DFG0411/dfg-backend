import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoOpenFjsumController } from './dfg-report-po-open-fjsum.controller';

describe('DfgReportPoOpenFjsumController', () => {
  let controller: DfgReportPoOpenFjsumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoOpenFjsumController],
    }).compile();

    controller = module.get<DfgReportPoOpenFjsumController>(DfgReportPoOpenFjsumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
