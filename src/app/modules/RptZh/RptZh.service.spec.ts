import { Test, TestingModule } from '@nestjs/testing';
import { RptZhService } from './RptZh.service';

describe('RptZhService', () => {
  let service: RptZhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RptZhService],
    }).compile();

    service = module.get<RptZhService>(RptZhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
