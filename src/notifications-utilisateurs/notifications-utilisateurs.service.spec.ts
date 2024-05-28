import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsUtilisateursService } from './notifications-utilisateurs.service';

describe('NotificationsUtilisateursService', () => {
  let service: NotificationsUtilisateursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsUtilisateursService],
    }).compile();

    service = module.get<NotificationsUtilisateursService>(NotificationsUtilisateursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
