import { Test, TestingModule } from '@nestjs/testing';
import { Po24mService } from './Po24m.service';

describe('Po24mService', () => {
  let service: Po24mService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Po24mService],
    }).compile();

    service = module.get<Po24mService>(Po24mService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
