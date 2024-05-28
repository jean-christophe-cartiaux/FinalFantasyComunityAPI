import { Test, TestingModule } from '@nestjs/testing';
import { AdminModoService } from './admin-modo.service';

describe('AdminModoService', () => {
  let service: AdminModoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminModoService],
    }).compile();

    service = module.get<AdminModoService>(AdminModoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
