import { Module } from '@nestjs/common';
import { AdminModoService } from './admin-modo.service';
import { AdminModoController } from './admin-modo.controller';

@Module({
  controllers: [AdminModoController],
  providers: [AdminModoService],
})
export class AdminModoModule {}
