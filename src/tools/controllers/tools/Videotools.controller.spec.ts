import { Test, TestingModule } from '@nestjs/testing';
import { VideoToolsController } from './VideoTools.controller';
import { Controller } from '@nestjs/common';
import { VideoToolsservice } from 'src/tools/services/tools/VideoTools.service';

describe('ToolsController', () => {
  let controller: VideoToolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoToolsservice],
    }).compile();
    // service = module.get<VideoToolsservice>(VideoToolsservice);
    // service = module.get<VideoToolsservice>(VideoToolsservice);
    const service = module.get<VideoToolsservice>(VideoToolsservice);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
// oninput extends VideoToolsController = any;
