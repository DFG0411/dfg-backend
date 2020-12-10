import { Test, TestingModule } from '@nestjs/testing';
import { TyuzanController } from './Tyuzan.controller';

describe('TyuzanController', () => {
  let controller: TyuzanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TyuzanController],
    }).compile();

    controller = module.get<TyuzanController>(TyuzanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
