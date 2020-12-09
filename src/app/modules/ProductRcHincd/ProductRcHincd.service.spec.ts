import { Test, TestingModule } from '@nestjs/testing';
import { ProductRcHincdService } from './ProductRcHincd.service';

describe('ProductRcHincdService', () => {
  let service: ProductRcHincdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRcHincdService],
    }).compile();

    service = module.get<ProductRcHincdService>(ProductRcHincdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
