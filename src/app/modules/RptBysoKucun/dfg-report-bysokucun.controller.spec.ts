import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportBysokucunController } from './dfg-report-bysokucun.controller';

describe('DfgReportBysokucunController', () => {
  let controller: DfgReportBysokucunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportBysokucunController],
    }).compile();

    controller = module.get<DfgReportBysokucunController>(DfgReportBysokucunController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
