import { Test, TestingModule } from '@nestjs/testing';
import { PoOpenNoupService } from './PoOpenNoup.service';

describe('PoOpenNoupService', () => {
  let service: PoOpenNoupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoOpenNoupService],
    }).compile();

    service = module.get<PoOpenNoupService>(PoOpenNoupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
