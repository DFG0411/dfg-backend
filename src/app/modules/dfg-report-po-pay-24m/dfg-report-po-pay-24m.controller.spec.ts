import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoPay24mController } from './dfg-report-po-pay-24m.controller';

describe('DfgReportPoPay24mController', () => {
  let controller: DfgReportPoPay24mController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoPay24mController],
    }).compile();

    controller = module.get<DfgReportPoPay24mController>(DfgReportPoPay24mController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
