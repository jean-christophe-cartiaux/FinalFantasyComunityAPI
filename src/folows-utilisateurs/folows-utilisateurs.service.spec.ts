import { Test, TestingModule } from '@nestjs/testing';
import { FolowsUtilisateursService } from './folows-utilisateurs.service';

describe('FolowsUtilisateursService', () => {
  let service: FolowsUtilisateursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FolowsUtilisateursService],
    }).compile();

    service = module.get<FolowsUtilisateursService>(FolowsUtilisateursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
