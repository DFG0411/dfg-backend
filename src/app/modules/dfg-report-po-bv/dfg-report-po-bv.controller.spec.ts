import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoBvController } from './dfg-report-po-bv.controller';

describe('DfgReportPoBvController', () => {
  let controller: DfgReportPoBvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoBvController],
    }).compile();

    controller = module.get<DfgReportPoBvController>(DfgReportPoBvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
