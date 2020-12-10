import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoController } from './dfg-report-po.controller';

describe('DfgReportPoController', () => {
  let controller: DfgReportPoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoController],
    }).compile();

    controller = module.get<DfgReportPoController>(DfgReportPoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
