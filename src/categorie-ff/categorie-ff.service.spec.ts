import { Test, TestingModule } from '@nestjs/testing';
import { CategorieFfService } from './categorie-ff.service';

describe('CategorieFfService', () => {
  let service: CategorieFfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorieFfService],
    }).compile();

    service = module.get<CategorieFfService>(CategorieFfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
