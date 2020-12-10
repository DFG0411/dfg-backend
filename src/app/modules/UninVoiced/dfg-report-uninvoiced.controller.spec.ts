import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportUninvoicedController } from './dfg-report-uninvoiced.controller';

describe('DfgReportUninvoicedController', () => {
  let controller: DfgReportUninvoicedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportUninvoicedController],
    }).compile();

    controller = module.get<DfgReportUninvoicedController>(DfgReportUninvoicedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
