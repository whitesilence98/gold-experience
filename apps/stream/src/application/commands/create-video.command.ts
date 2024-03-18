// src/stream/application/commands/create-video.command.ts

import { CreateVideoDto } from '../dtos/create-video.dto';

export class CreateVideoCommand {
  constructor(public readonly createVideoDto: CreateVideoDto) {}
}
