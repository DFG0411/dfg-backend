import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportZhController } from './dfg-report-zh.controller';

describe('DfgReportZhController', () => {
  let controller: DfgReportZhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportZhController],
    }).compile();

    controller = module.get<DfgReportZhController>(DfgReportZhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
