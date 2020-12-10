import { Test, TestingModule } from '@nestjs/testing';
import { PoBvController } from './PoBv.controller';

describe('PoBvController', () => {
  let controller: PoBvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoBvController],
    }).compile();

    controller = module.get<PoBvController>(PoBvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
