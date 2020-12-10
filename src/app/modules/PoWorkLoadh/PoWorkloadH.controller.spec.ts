import { Test, TestingModule } from '@nestjs/testing';
import { PoWorkloadHController } from './PoWorkloadH.controller';

describe('PoWorkloadHController', () => {
  let controller: PoWorkloadHController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoWorkloadHController],
    }).compile();

    controller = module.get<PoWorkloadHController>(PoWorkloadHController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
