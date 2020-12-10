import { Test, TestingModule } from '@nestjs/testing';
import { ProductRcHincdAllController } from './ProductRcHincdAll.controller';

describe('ProductRcHincdAllController', () => {
  let controller: ProductRcHincdAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductRcHincdAllController],
    }).compile();

    controller = module.get<ProductRcHincdAllController>(ProductRcHincdAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
