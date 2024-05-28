import { Test, TestingModule } from '@nestjs/testing';
import { ReglesService } from './regles.service';

describe('ReglesService', () => {
  let service: ReglesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReglesService],
    }).compile();

    service = module.get<ReglesService>(ReglesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
