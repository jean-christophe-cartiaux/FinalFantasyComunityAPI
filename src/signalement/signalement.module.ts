import { Module } from '@nestjs/common';
import { SignalementService } from './signalement.service';
import { SignalementController } from './signalement.controller';

@Module({
  controllers: [SignalementController],
  providers: [SignalementService],
})
export class SignalementModule {}
