import { Test, TestingModule } from '@nestjs/testing';
import { AmisService } from './amis.service';

describe('AmisService', () => {
  let service: AmisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmisService],
    }).compile();

    service = module.get<AmisService>(AmisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
