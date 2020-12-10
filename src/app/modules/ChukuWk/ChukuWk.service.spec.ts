import { Test, TestingModule } from '@nestjs/testing';
import { ChukuWkService } from './ChukuWk.service';

describe('DfgReportChukuwkService', () => {
  let service: ChukuWkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChukuWkService],
    }).compile();

    service = module.get<ChukuWkService>(ChukuWkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
