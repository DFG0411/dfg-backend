import { Test, TestingModule } from '@nestjs/testing';
import { PoTqlvController } from './PoTqlv.controller';

describe('DfgReportPoTqlvController', () => {
  let controller: PoTqlvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoTqlvController],
    }).compile();

    controller = module.get<PoTqlvController>(PoTqlvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
