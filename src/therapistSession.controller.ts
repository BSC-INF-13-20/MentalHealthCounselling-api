import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TherapistSessionService } from './therapistSession.service';
import { TherapistSession } from './therapistSession.entity';

@Controller('therapist-sessions')
export class TherapistSessionController {
  constructor(private readonly therapistSessionService: TherapistSessionService) {}

  @Get()
  getAllSessions(): TherapistSession[] {
    return this.therapistSessionService.getAllSessions();
  }

  @Post()
  createSession(@Body() sessionData: TherapistSession): TherapistSession {
    return this.therapistSessionService.createSession(sessionData);
  }

  @Delete(':id')
  deleteSession(@Param('id') sessionId: number): void {
    this.therapistSessionService.deleteSession(sessionId);
  }
}

 

export { TherapistSession };
