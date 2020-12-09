import { Test, TestingModule } from '@nestjs/testing';
import { PoTqlvZController } from './PoTqlvZ.controller';

describe('PoTqlvZController', () => {
  let controller: PoTqlvZController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoTqlvZController],
    }).compile();

    controller = module.get<PoTqlvZController>(PoTqlvZController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
