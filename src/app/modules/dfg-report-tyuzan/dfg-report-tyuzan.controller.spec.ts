import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportTyuzanController } from './dfg-report-tyuzan.controller';

describe('DfgReportTyuzanController', () => {
  let controller: DfgReportTyuzanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportTyuzanController],
    }).compile();

    controller = module.get<DfgReportTyuzanController>(DfgReportTyuzanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
