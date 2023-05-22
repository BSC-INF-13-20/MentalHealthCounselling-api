import{ Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VideoTools } from "../typeorm/entities/VideoTools";
import { VideoToolsController } from "./controllers/tools/VideoTools.controller";
import { VideoToolsservice } from "./services/tools/VideoTools.service";

@Module({
  imports: [TypeOrmModule.forFeature([VideoTools])],
  controllers: [VideoToolsController],
  providers: [VideoToolsservice],
})

export class VideoToolsModel {}



