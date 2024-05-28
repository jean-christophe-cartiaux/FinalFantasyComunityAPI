import { Test, TestingModule } from '@nestjs/testing';
import { PublicationForumsService } from './publication-forums.service';

describe('PublicationForumsService', () => {
  let service: PublicationForumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicationForumsService],
    }).compile();

    service = module.get<PublicationForumsService>(PublicationForumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
