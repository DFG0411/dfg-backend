import { Test, TestingModule } from '@nestjs/testing';
import { PoOpenNoupController } from './PoOpenNoup.controller';

describe('PoOpenNoupController', () => {
  let controller: PoOpenNoupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoOpenNoupController],
    }).compile();

    controller = module.get<PoOpenNoupController>(PoOpenNoupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
