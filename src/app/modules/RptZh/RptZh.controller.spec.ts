import { Test, TestingModule } from '@nestjs/testing';
import { RptZhController } from './RptZh.controller';

describe('RptZhController', () => {
  let controller: RptZhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RptZhController],
    }).compile();

    controller = module.get<RptZhController>(RptZhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
