import { Module } from '@nestjs/common';
import { MessagePrivesService } from './message-prives.service';
import { MessagePrivesController } from './message-prives.controller';

@Module({
  controllers: [MessagePrivesController],
  providers: [MessagePrivesService],
})
export class MessagePrivesModule {}
