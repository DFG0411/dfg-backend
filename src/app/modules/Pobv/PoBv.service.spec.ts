import { Test, TestingModule } from '@nestjs/testing';
import { PoBvService } from './PoBv.service';

describe('PoBvService', () => {
  let service: PoBvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoBvService],
    }).compile();

    service = module.get<PoBvService>(PoBvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
