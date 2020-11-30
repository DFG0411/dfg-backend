import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportOrdersController } from './dfg-report-orders.controller';

describe('DfgReportOrdersController', () => {
  let controller: DfgReportOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportOrdersController],
    }).compile();

    controller = module.get<DfgReportOrdersController>(DfgReportOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
