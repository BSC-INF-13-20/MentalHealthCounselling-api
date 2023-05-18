import { Injectable } from '@nestjs/common';
import { TherapistSession } from './therapistSession.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TherapistSessionEntity } from './therapistSession.entity';

@Injectable()
export class TherapistSessionService {
  private sessions: TherapistSession[] = [];

 getAllSessions(): TherapistSession[] {
    return this.sessions;
  }

   createSession(sessionData: TherapistSession): TherapistSession {
    const newSession: TherapistSession = {
      ...sessionData,
      id: this.sessions.length + 1,
    };
    this.sessions.push(newSession);
    return newSession;
  }

 deleteSession(sessionId: number): void {
    const index = this.sessions.findIndex(session => session.id === sessionId);
    if (index !== -1) {
      this.sessions.splice(index, 1);
    }
  }
}

export class Therapistsession{
  constructor(
    @InjectRepository(TherapistSessionEntity)
    private readonly sessionRepository: Repository<TherapistSessionEntity>,
  ) {}

  async getAllSessions(): Promise<TherapistSession[]> {
    const sessions = await this.sessionRepository.find();
    return sessions.map(this.mapEntityToModel);
  }

  async createSession(sessionData: TherapistSession): Promise<TherapistSession> {
    const sessionEntity = this.sessionRepository.create(sessionData);
    const createdSession = await this.sessionRepository.save(sessionEntity);
    return this.mapEntityToModel(createdSession);
  }

  async deleteSession(sessionId: number): Promise<void> {
    await this.sessionRepository.delete(sessionId);
  }

  private mapEntityToModel(entity: TherapistSessionEntity): TherapistSession {
    return {
      id: entity.id,
      therapistId: entity.therapistId,
      clientName: entity.clientName,
      date: entity.date,
      duration: entity.duration,
      // Map other properties as needed
    };
  }
}