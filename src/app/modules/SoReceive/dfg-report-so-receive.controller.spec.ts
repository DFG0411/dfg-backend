import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportSoReceiveController } from './dfg-report-so-receive.controller';

describe('DfgReportSoReceiveController', () => {
  let controller: DfgReportSoReceiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportSoReceiveController],
    }).compile();

    controller = module.get<DfgReportSoReceiveController>(DfgReportSoReceiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
