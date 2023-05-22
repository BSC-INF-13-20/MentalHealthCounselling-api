
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { VideoTools } from "src/typeorm/entities/VideoTools";
import { Repository } from "typeorm";

@Injectable()
export class VideoToolsservice{
    constructor (
        @InjectRepository(VideoTools)private readonly VideoToolsRepository: Repository<VideoTools>,
 ){}

 findAll(): Promise<VideoTools[]> {
return this.VideoToolsRepository.find(); 
}

findOne (ID:number): Promise<VideoTools> {
    return this.VideoToolsRepository.findOne({where:{ID:ID}});
}

create (user: VideoTools): Promise<VideoTools> {
    return this.VideoToolsRepository.save(user);
}

async update (ID: number, user:VideoTools) {
    await this.VideoToolsRepository.update(ID,user)
    }

    async remove (ID: number): Promise<void> {
        await this.VideoToolsRepository.delete(ID);

    }
}