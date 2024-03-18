// src/stream/infrastructure/controllers/video.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';

import { VideoService } from '../../application/services/video.service';
import { CreateVideoDto } from '../../application/dtos/create-video.dto';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  createVideo(@Body() createVideoDto: CreateVideoDto): Promise<void> {
    return this.videoService.createVideo(createVideoDto);
  }

  @Get()
  getStreamList(): string {
    return 'Hello Stream';
  }
}
