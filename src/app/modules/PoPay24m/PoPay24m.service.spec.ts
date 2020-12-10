import { Test, TestingModule } from '@nestjs/testing';
import { PoPay24mService } from './PoPay24m.service';

describe('PoPay24mService', () => {
  let service: PoPay24mService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoPay24mService],
    }).compile();

    service = module.get<PoPay24mService>(PoPay24mService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
