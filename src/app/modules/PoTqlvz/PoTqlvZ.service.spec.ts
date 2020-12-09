import { Test, TestingModule } from '@nestjs/testing';
import { PoTqlvZService } from './PoTqlvZ.service';

describe('PoTqlvZService', () => {
  let service: PoTqlvZService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoTqlvZService],
    }).compile();

    service = module.get<PoTqlvZService>(PoTqlvZService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
