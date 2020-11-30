import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoPricecompareController } from './dfg-report-po-pricecompare.controller';

describe('DfgReportPoPricecompareController', () => {
  let controller: DfgReportPoPricecompareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoPricecompareController],
    }).compile();

    controller = module.get<DfgReportPoPricecompareController>(DfgReportPoPricecompareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
