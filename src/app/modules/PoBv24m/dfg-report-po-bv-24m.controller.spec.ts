import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoBv24mController } from './dfg-report-po-bv-24m.controller';

describe('DfgReportPoBv24mController', () => {
  let controller: DfgReportPoBv24mController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoBv24mController],
    }).compile();

    controller = module.get<DfgReportPoBv24mController>(DfgReportPoBv24mController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
