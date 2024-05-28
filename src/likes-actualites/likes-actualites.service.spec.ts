import { Test, TestingModule } from '@nestjs/testing';
import { LikesActualitesService } from './likes-actualites.service';

describe('LikesActualitesService', () => {
  let service: LikesActualitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikesActualitesService],
    }).compile();

    service = module.get<LikesActualitesService>(LikesActualitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
