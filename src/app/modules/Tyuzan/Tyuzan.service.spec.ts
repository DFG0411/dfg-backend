import { Test, TestingModule } from '@nestjs/testing';
import { TyuzanService } from './Tyuzan.service';

describe('TyuzanService', () => {
  let service: TyuzanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TyuzanService],
    }).compile();

    service = module.get<TyuzanService>(TyuzanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
