import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoPayController } from './dfg-report-po-pay.controller';

describe('DfgReportPoPayController', () => {
  let controller: DfgReportPoPayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoPayController],
    }).compile();

    controller = module.get<DfgReportPoPayController>(DfgReportPoPayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
