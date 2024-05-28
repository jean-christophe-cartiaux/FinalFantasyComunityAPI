import { Test, TestingModule } from '@nestjs/testing';
import { CommentaireActualitesService } from './commentaire-actualites.service';

describe('CommentaireActualitesService', () => {
  let service: CommentaireActualitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentaireActualitesService],
    }).compile();

    service = module.get<CommentaireActualitesService>(CommentaireActualitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
