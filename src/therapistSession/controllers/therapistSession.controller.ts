import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe, Put } from '@nestjs/common';
import { TherapistSessionService } from '../services/therapistSession.service';
import { TherapistSession } from 'src/typeorm/entities/therapistSession';
import { UpdatetherapySessionDto } from '../dtos/UpdatetherapistSession.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreatetherapySessionDto } from '../dtos/CreatetherapistSession.dto';
// import { TherapistSessionEntity } from './therapistSession.entity';
@ApiTags('THERAPISTSESSION')
@Controller('therapist-sessions')
export class TherapistSessionController {
  TherapistSessionService: any;
  constructor(private readonly therapistSessionService: TherapistSessionService) {}

  @Get()
 async getAllSessions(){
  const sessions=await this.TherapistSessionService.findAll();
        return sessions;
    
  }

  @Post()
  async create(@Body() createTherapySessionDto: TherapistSession){
    const session = await this.TherapistSessionService.create(createTherapySessionDto);
    return session;
  }

  @Put(':id')
 async updateTherapistSessionById(@Param('id',ParseIntPipe)id:number,
 @Body() UpdateTherapistSessionDto: UpdatetherapySessionDto
 ): Promise<void>{
  this.TherapistSessionService.updateTherapistSession(id, UpdateTherapistSessionDto)

 

}


}


