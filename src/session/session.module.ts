import { Module } from '@nestjs/common';
import { SessionService } from './services/session/session.service';
import { SessionController } from './controllers/session/session.controller';

@Module({
  providers: [SessionService],
  controllers: [SessionController]
})
export class SessionModule {}
