import { Test, TestingModule } from '@nestjs/testing';
import { MessagePrivesService } from './message-prives.service';

describe('MessagePrivesService', () => {
  let service: MessagePrivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagePrivesService],
    }).compile();

    service = module.get<MessagePrivesService>(MessagePrivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
