import { Test, TestingModule } from '@nestjs/testing';
import { PoWorkloadController } from './PoWorkload.controller';

describe('PoWorkloadController', () => {
  let controller: PoWorkloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoWorkloadController],
    }).compile();

    controller = module.get<PoWorkloadController>(PoWorkloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
