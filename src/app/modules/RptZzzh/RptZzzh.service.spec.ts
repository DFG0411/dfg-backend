import { Test, TestingModule } from '@nestjs/testing';
import { RptZzzhService } from './RptZzzh.service';

describe('RptZzzhService', () => {
  let service: RptZzzhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RptZzzhService],
    }).compile();

    service = module.get<RptZzzhService>(RptZzzhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
