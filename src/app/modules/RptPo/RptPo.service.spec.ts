import { Test, TestingModule } from '@nestjs/testing';
import { RptPoService } from './RptPo.service';

describe('RptPoService', () => {
  let service: RptPoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RptPoService],
    }).compile();

    service = module.get<RptPoService>(RptPoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
