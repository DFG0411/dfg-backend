import { Test, TestingModule } from '@nestjs/testing';
import { PoPayService } from './PoPay.service';

describe('PoPayService', () => {
  let service: PoPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoPayService],
    }).compile();

    service = module.get<PoPayService>(PoPayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
