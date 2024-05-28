import { Module } from '@nestjs/common';
import { PublicationForumsService } from './publication-forums.service';
import { PublicationForumsController } from './publication-forums.controller';

@Module({
  controllers: [PublicationForumsController],
  providers: [PublicationForumsService],
})
export class PublicationForumsModule {}
