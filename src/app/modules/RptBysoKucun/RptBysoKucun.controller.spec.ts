import { Test, TestingModule } from '@nestjs/testing';
import { RptBysoKucun } from './RptBysoKucun.controller';

describe('DfgReportBysokucunController', () => {
  let controller: RptBysoKucun;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RptBysoKucun],
    }).compile();

    controller = module.get<RptBysoKucun>(RptBysoKucun);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
