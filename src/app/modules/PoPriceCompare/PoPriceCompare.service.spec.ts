import { Test, TestingModule } from '@nestjs/testing';
import { PoPriceCompareService } from './PoPriceCompare.service';

describe('PoPriceCompareService', () => {
  let service: PoPriceCompareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoPriceCompareService],
    }).compile();

    service = module.get<PoPriceCompareService>(PoPriceCompareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
