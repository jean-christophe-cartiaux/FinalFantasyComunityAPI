import { Test, TestingModule } from '@nestjs/testing';
import { ParametreUtilisateursService } from './parametre-utilisateurs.service';

describe('ParametreUtilisateursService', () => {
  let service: ParametreUtilisateursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParametreUtilisateursService],
    }).compile();

    service = module.get<ParametreUtilisateursService>(ParametreUtilisateursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
