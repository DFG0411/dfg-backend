import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPo24mController } from './dfg-report-po-24m.controller';

describe('DfgReportPo24mController', () => {
  let controller: DfgReportPo24mController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPo24mController],
    }).compile();

    controller = module.get<DfgReportPo24mController>(DfgReportPo24mController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
