import { Test, TestingModule } from '@nestjs/testing';
import { PoPriceCompareController } from './PoPriceCompare.controller';

describe('PoPriceCompareController', () => {
  let controller: PoPriceCompareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoPriceCompareController],
    }).compile();

    controller = module.get<PoPriceCompareController>(PoPriceCompareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
