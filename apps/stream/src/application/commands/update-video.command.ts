// src/stream/application/commands/update-video.command.ts

import { UpdateVideoDto } from '../dtos/update-video.dto';

export class UpdateVideoCommand {
  constructor(public readonly updateVideoDto: UpdateVideoDto) {}
}
