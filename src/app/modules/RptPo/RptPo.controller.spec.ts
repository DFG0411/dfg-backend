import { Test, TestingModule } from '@nestjs/testing';
import { RptPoController } from './RptPo.controller';

describe('RptPoController', () => {
  let controller: RptPoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RptPoController],
    }).compile();

    controller = module.get<RptPoController>(RptPoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
