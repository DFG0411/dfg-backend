import { Test, TestingModule } from '@nestjs/testing';
import { ProductRcHincdController } from './ProductRcHincd.controller';

describe('ProductRcHincdController', () => {
  let controller: ProductRcHincdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductRcHincdController],
    }).compile();

    controller = module.get<ProductRcHincdController>(ProductRcHincdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
