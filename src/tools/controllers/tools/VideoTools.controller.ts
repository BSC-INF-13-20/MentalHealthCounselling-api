

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { VideoTools } from "src/typeorm/entities/VideoTools";
import { VideoToolsservice } from "src/tools/services/tools/VideoTools.service";
import { ApiTags } from "@nestjs/swagger";
//mport { RolesGuard } from "src/Guards/roles.guards";
//import { LoggingInterceptor } from "src/interceptors/logging.interceptors


@ApiTags('VIDEOTOOLS')
@Controller('VideoTools')
//@UseGuards(RolesGuard)
//@UseInterceptors(LoggingInterceptor)

export class VideoToolsController {
    constructor (private VideoToolsService:VideoToolsservice) {
}

@Get()
async fillAll() {
    const response = await this.VideoToolsService.findAll();
    return response; 
}


@Get(":ID")
async findOne (@Param('ID', ParseIntPipe) ID:number){
    const response = await this.VideoToolsService.findOne(ID);
    return response;
}

 @Post()
    async create(@Body() createUserDto: VideoTools){
        const response = await this.VideoToolsService.create(createUserDto);
        return response;
 }

 @Put(":ID")
 async update (@Param('ID', ParseIntPipe) ID: number, @Body() createUserDto: VideoTools) {
    const response = await this.VideoToolsService.update(ID,createUserDto)
    return response;
}

@Delete()
async delete (@Body() ID:number) {
    const response = await this.VideoToolsService.remove(ID);
    return response;
}


}
